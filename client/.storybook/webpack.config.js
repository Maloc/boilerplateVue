const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = (defaultConfig) => {
  defaultConfig.config.resolve.extensions.push('.ts', '.tsx', '.vue', '.css', '.less', '.scss', '.sass', '.html')

  defaultConfig.config.module.rules.push({
    test: /\.ts$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true
        },
      }
    ],
  });
  defaultConfig.config.module.rules.push({ test: /\.less$/, loaders: [ 'style-loader', 'css-loader', 'less-loader' ] });
  defaultConfig.config.module.rules.push({ test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' });

  defaultConfig.config.plugins.push(new ForkTsCheckerWebpackPlugin())

  return defaultConfig.config;
};