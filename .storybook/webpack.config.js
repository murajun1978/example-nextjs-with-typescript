const path = require('path');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    include: path.resolve(__dirname, '../'),
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
        options: {
          configFileName: './.storybook/tsconfig.json',
        },
      },
      { loader: require.resolve('react-docgen-typescript-loader') },
    ],
  });

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
