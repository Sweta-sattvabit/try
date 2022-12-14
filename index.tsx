import { Box, Grid } from '@mantine/core';
import Image from 'next/image';
import type { ReactNode } from 'react';
import React from 'react';

import authPagesPoster from '@/public/assets/images/rolo-auth-poster.webp';
import roloLogo from '@/public/assets/images/rolo-logo.svg';

import { useAuthenticationPagesLayoutStyles } from './index.style';

const AuthenticationPagesLayout = ({ children }: { children: ReactNode }) => {
  const { classes } = useAuthenticationPagesLayoutStyles();
  return (
    <Grid align={'center'} h={'100vh'} gutter={0}>
      {/* This grid manages the different form components on left and image poster on right */}
      <Grid.Col h={'100vh'} md={6} lg={6}>
        {/* This flex manages logo and the children layout */}

        <Image
          src={roloLogo}
          alt={'alt image'}
          className={classes.authPageRoloLogo}
        />

        <Box>{children}</Box>
      </Grid.Col>
      <Grid.Col
        h={'100%'}
        w={'100%'}
        md={6}
        lg={6}
        className={classes.authPagesPosterContainer}
      >
        <Image
          src={authPagesPoster}
          alt={'page-poster'}
          fill={true}
          sizes="(max-width: 768px) 50vw,
          (max-width: 1200px) 50vw,
          50vw"
          className={classes.authPagesPoster}
        />
      </Grid.Col>
    </Grid>
  );
};

export default AuthenticationPagesLayout;
