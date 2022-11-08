const path = require('path');
const rootDir = path.join(__dirname, '..');
const webpackEnv = process.env.NODE_ENV || 'development';
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: webpackEnv,
  entry: {
    app: path.join(rootDir, './index.web.tsx'),
  },
  devServer: {
    host: '0.0.0.0',
    port: 3030,
  },
  output: {
    filename: 'app-[fullhash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../public/index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(tsx|ts|jsx|js|mjs)$/,
        include: [
          path.resolve(__dirname, '../src'),
          path.resolve(__dirname, '../node_modules/react-native-vector-icons'),
        ],
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              ['module:react-native-dotenv'],
              'react-native-web',
              [
                'module-resolver',
                {
                  extensions: [
                    '.ios.js',
                    '.android.js',
                    '.js',
                    '.ts',
                    '.web.tsx',
                    '.tsx',
                    '.json',
                  ],
                  alias: {
                    '^react-native$': 'react-native-web',
                  },
                },
              ],
            ],
            presets: [
              'module:metro-react-native-babel-preset',
              '@babel/preset-typescript',
            ],
          },
        },
      },
      {
        test: /\.(png|jpg|gif|ttf)$/i,
        include: [
          path.resolve(__dirname, '../src'),
          path.resolve(__dirname, '../node_modules/@react-navigation'),
          path.resolve(__dirname, '../node_modules/react-native-vector-icons'),
        ],
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      'react-native$': 'react-native-web',
    },
    extensions: [
      '.web.tsx',
      '.web.ts',
      '.tsx',
      '.ts',
      '.web.jsx',
      '.web.js',
      '.jsx',
      '.js',
    ],
  },
};
