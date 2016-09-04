'use strict'

const novaColors = require('nova-colors')

exports.decorateConfig = config => Object.assign({}, config, {
  cursorColor: novaColors.bright.white,
  foregroundColor: novaColors.normal.white,
  backgroundColor: novaColors.normal.black,
  borderColor: novaColors.normal.black,
  colors: {
    black: novaColors.normal.black,
    red: novaColors.normal.red,
    green: novaColors.normal.green,
    yellow: novaColors.normal.yellow,
    blue: novaColors.normal.blue,
    magenta: novaColors.normal.magenta,
    cyan: novaColors.normal.cyan,
    white: novaColors.normal.white,
    lightBlack: novaColors.bright.black,
    lightRed: novaColors.bright.red,
    lightGreen: novaColors.normal.green,
    lightYellow: novaColors.normal.yellow,
    lightBlue: novaColors.normal.blue,
    lightMagenta: novaColors.bright.magenta,
    lightCyan: novaColors.normal.cyan,
    lightWhite: novaColors.bright.white,
  },
  termCSS: `
    ${config.termCSS},
    .cursor-node {
      opacity: 0.5 !important;
    }
  `,
  css: `
    ${config.css},
    .tab_first {
      margin-left: 0 !important;
    }
    .tab_tab {
      background-color: ${novaColors.decoration.medium} !important;
    }
    .tab_tab.tab_active {
      background-color: ${novaColors.decoration.medium} !important;
      border: none !important;
    }
    .tab_tab.tab_active::before {
      border: none !important;
    }
    .tab_text {
      border: none !important;
    }
    .tab_textActive {
      color: ${novaColors.bright.red} !important;
    }
    .tabs_title,
    .tab_textInner {
      font-size: 14px !important;
      font-weight: bold !important;
    }
  `,
})
