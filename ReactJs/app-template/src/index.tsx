import * as serviceWorker from './serviceWorker';

import { CSSReset, ThemeProvider } from '@chakra-ui/core';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import customTheme from './utils/theme';

const render = (): void => {
  ReactDOM.render(
    <ThemeProvider theme={customTheme}>
      <App />
      <CSSReset />
    </ThemeProvider>,
    document.getElementById('root'),
  );
};

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
