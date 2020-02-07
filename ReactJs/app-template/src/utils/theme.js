import { theme } from '@chakra-ui/core';

const fonts = {
  ...theme.fonts,
  heading: `'Roboto', sans-serif`,
  body: `'Roboto', sans-serif`,
};

const customTheme = { ...theme, fonts };

export default customTheme;
