module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        root: ['./'],
        alias: {
          'db-utils': './utils/db-utils',
        },
      },
    ],
  ],
};
