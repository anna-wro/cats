const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

const withImages = require('next-images');

module.exports = withImages(
  withMDX({
    pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  }),
);
