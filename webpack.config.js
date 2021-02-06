module.exports = {
  entry: `./src/index.js`,

  output: {
    filename: 'main.js',
  },

  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { url: false },
          },
        ],
      },
    ],
  },

  devServer: {
    contentBase: 'dist',
    open: true,
  },
};
