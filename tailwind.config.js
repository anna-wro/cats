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
      transparent: 'transparent',
    },
    boxShadow: {
      DEFAULT:
        '0px 0px 1px 0px rgba(0, 0, 0, 0.04), 0px 4px 8px 0px rgba(0, 0, 0, 0.04)',
      lg:
        '0px 0px 1px 0px rgba(0, 0, 0, 0.04), 0px 2px 6px 0px rgba(0, 0, 0, 0.04), 0px 16px 24px 0px rgba(0, 0, 0, 0.06)',
    },
    fontFamily: {
      main: ['Montserrat', 'sans-serif'],
      info: ['Inter', 'sans-serif'],
      title: ['Nunito', 'sans-serif'],
    },
  },
  variants: {},
  plugins: [],
};
