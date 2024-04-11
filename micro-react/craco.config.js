// // const { name } = require("./package");
// console.log('craco>>>', process.env.PORT);
// module.exports = {
//   webpack: {
//     configure: (webpackConfig) => {
//       webpackConfig.output.library = `reactApp`;
//       webpackConfig.output.libraryTarget = 'umd';
//       webpackConfig.output.chunkLoadingGlobal = `webpackJsonp_reactApp`;
//       // webpackConfig.output.jsonpFunction = `webpackJsonp_reactApp`;
//       return webpackConfig;
//     },
//   },
//   devServer: (devServerConfig) => {
//     devServerConfig.historyApiFallback = true;
//     devServerConfig.open = false;
//     devServerConfig.hot = true;
//     devServerConfig.watchFiles = [];
//     devServerConfig.headers = {
//       'Access-Control-Allow-Origin': '*',
//     };
//     //devServerConfig.port = 8085;
//     return devServerConfig;
//   },
// };
