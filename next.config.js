const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

const withImages = require('next-images');
const withPWA = require('next-pwa');

const compose = (...fns) => (x) => fns.reduceRight((y, f) => f(y), x);

module.exports = compose(
  () =>
    withPWA({
      pwa: {
        dest: 'public',
      },
    }),
  withImages,
  () => withMDX({ pageExtensions: ['ts', 'tsx', 'md', 'mdx'] }),
);
