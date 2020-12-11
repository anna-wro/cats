module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      blue: '#25CCF7',
      blueLight: '#D9F4FC',
      orange: '#F08F35',
      orangeLight: '#FBE8CF',
      red: '#FF4747',
      redLight: '#FFEDED',
      gray: '#ABB5C4',
      dark: '#2E293B',
      white: '#FFFFFF',
    },
  },
  variants: {},
  plugins: [],
};
