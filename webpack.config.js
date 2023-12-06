// const path = require('path');
// const webpack = require('webpack');

// module.exports = {
//   resolve: {
//     extensions: ['.js', '.jsx'],
//     fallback: {
//       stream: require.resolve('stream-browserify'),
//       crypto: require.resolve('crypto-browserify'),
//     },
//   },

//   plugins: [
//     new webpack.ProvidePlugin({
//       process: 'process/browser',
//     }),
//     new webpack.NormalModuleReplacementPlugin(
//       /node:crypto/,
//       (resource) => {
//         resource.request = resource.request.replace(/^node:/, '');
//       }
//     ),
//   ],
// };
