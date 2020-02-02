import React from 'react';
import { Global, css } from '@emotion/core';
import MyFont from './fonts/MyFont.woff';

export default () => (
  <Global
    styles={css`
      html, body, #root {
        height: 100%;
      }
      body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
          "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
          "Helvetica Neue", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      @font-face {
        font-family: "MyFont";
        src: local("MyFont"), url(${MyFont}) format("woff");
      }
    `}
  />
);
