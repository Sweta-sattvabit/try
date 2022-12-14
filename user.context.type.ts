export type Action =
  | { type: 'LOGIN' }
  | { type: 'START_FETCHING_USER' }
  | { type: 'ERROR_FETCHING_USER'; payload: { error: any; loading: boolean } }
  | {
      type: 'FINISH_FETCHING_USER';
      payload: { id: string; fullName: string; email: string };
    }; // we will have literal types here

export type Dispatch = (action: Action) => void;

export type State = {
  id: string;
  fullName: string;
  email: string;
  error: any;
  loading: boolean;
};

export type DataProvidedOnLogin = { email: string; password: string };
