import { createStyles } from '@mantine/core';

export const useAuthenticationPagesLayoutStyles = createStyles((theme) => ({
  authPagesPosterContainer: {
    backgroundColor: theme.colors.rolo[5],
    position: 'relative',
    // we will hide the image 1px before the md breakpoint triggers to avoid showing users an empty space
    [`@media (max-width: ${theme.breakpoints.md - 1}px) `]: {
      display: 'none',
    },
  },
  authPagesPoster: {
    objectFit: 'contain',
  },

  authPageRoloLogo: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '55px', // matching figma here
  },
}));
