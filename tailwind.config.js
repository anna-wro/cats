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
      orange: '#F08F35',
      red: '#FF4747',
      gray: '#ABB5C4',
      dark: '#2E293B',
      white: '#ffffff',
    },
  },
  variants: {},
  plugins: [],
};
