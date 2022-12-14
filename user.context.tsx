import Cookies from 'js-cookie';
import React, { createContext, useContext, useEffect, useReducer } from 'react';

import {
  fetchUserDataUsingToken,
  fetchUserTokenUsingLoginCredentials,
} from '@/services/user/user.service';
import { handleAxiosErrors } from '@/utils/handleErrors';

import type {
  Action,
  DataProvidedOnLogin,
  Dispatch,
  State,
} from './user.context.type';

const UserContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

const fetchUserTokens = async (
  dispatch: React.Dispatch<Action>,
  userData: DataProvidedOnLogin,
) => {
  dispatch({ type: 'START_FETCHING_USER' });
  try {
    const loginResponse = await fetchUserTokenUsingLoginCredentials(userData);
    if (loginResponse?.data?.access_token) {
      // For now we have token in json body will be later refactored to accept the token from headers
      Cookies.set('token', loginResponse?.data?.access_token);
      const userDataResponse = await fetchUserDataUsingToken(
        loginResponse.data.access_token,
      );
      dispatch({
        type: 'FINISH_FETCHING_USER',
        payload: userDataResponse.data,
      });
    }
    return {
      status: 'success',
    };
  } catch (error: any) {
    dispatch({
      type: 'ERROR_FETCHING_USER',
      payload: { error, loading: false },
    });
    handleAxiosErrors(error, dispatch);
    return {
      status: 'error',
    };
  }
};

const fetchUserDataOnPageReload = async (
  // will be in service files
  token: string,
  dispatch: React.Dispatch<Action>,
) => {
  dispatch({ type: 'START_FETCHING_USER' });
  const userDataResponse = await fetchUserDataUsingToken(token);
  dispatch({ type: 'FINISH_FETCHING_USER', payload: userDataResponse.data });
};

const userReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
      };

    case 'START_FETCHING_USER':
      return {
        ...state,
        loading: true,
      };
    case 'FINISH_FETCHING_USER':
      return {
        // store the state here
        ...state,
        ...action.payload,
        loading: false,
      };
    case 'ERROR_FETCHING_USER':
      return {
        ...state,
        error: action.payload.error,
        loading: action.payload.loading,
      };
    default: {
      throw new Error(`Unhandled request!`);
    }
  }
};

function UserProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(userReducer, {
    id: '',
    fullName: '',
    email: '',
    error: '',
    loading: false,
  });
  const value = { state, dispatch };

  useEffect(() => {
    if (Cookies.get('token')) {
      fetchUserDataOnPageReload(Cookies.get('token')!, dispatch);
    }
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

const useUser = () => useContext(UserContext);

export { fetchUserTokens, UserProvider, useUser };
