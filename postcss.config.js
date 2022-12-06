export default {
  plugins: {
    'postcss-px-to-viewport-8-plugin': {
      unitToConvert: 'px',
      viewportWidth: 750,
      viewportHeight: 1334,
      unitPrecision: 3,
      viewportUnit: 'rem',
      fontViewportUnit: 'rem',
      selectorBlackList: ['.ignore'],
      minPixelValue: 1,
      mediaQuery: false,
    },
  },
}
