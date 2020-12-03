module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/pages/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {},
    },
  },
  variants: {},
  plugins: [],
};
