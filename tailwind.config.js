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
      blue: { DEFAULT: '#25CCF7', light: '#D9F4FC' },
      orange: { DEFAULT: '#F08F35', light: '#FBE8CF' },
      red: { DEFAULT: '#FF4747', light: '#FFEDED' },
      gray: { DEFAULT: '#ABB5C4', light: '#D2DAE0' },
      dark: '#2E293B',
      white: '#FFFFFF',
    },
  },
  variants: {},
  plugins: [],
};
