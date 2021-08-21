// const CompressionWebpackPlugin = require("compression-webpack-plugin");
// const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  devServer: {
    hot: true,
    hotOnly: true,
    port: process.env.PORT,
    overlay: true,
    open: false,
  },
  configure: {
    resolve: {
      extensions: [".js", ".json", ".jsx", ".ts", ".tsx"],
    },
    //抽离公用模块
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            chunks: "initial",
            minChunks: 2,
            maxInitialRequests: 5,
            minSize: 0,
          },
          vendor: {
            test: /node_modules/,
            chunks: "initial",
            name: "zht-app-vendor",
            priority: 10,
            enforce: true,
          },
        },
      },
    },
  },
  babel: {
    presets: [
      [
        "@babel/preset-env",
        {
          modules: false, // 对ES6的模块文件不做转化，以便使用tree shaking、sideEffects等
          useBuiltIns: "entry", // browserslist环境不支持的所有垫片都导入
          // https://babeljs.io/docs/en/babel-preset-env#usebuiltins
          // https://github.com/zloirock/core-js/blob/master/docs/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md
          corejs: {
            version: 3, // 使用core-js@3
            proposals: true,
          },
        },
      ],
    ],
    plugins: [
      // 配置 babel-plugin-import
      ["import", { libraryName: "antd", libraryDirectory: "es", style: "css" }],
      // 配置解析器
      ["@babel/plugin-proposal-decorators", { legacy: true }],
      ["@babel/plugin-proposal-private-methods", { loose: true }],
      ["@babel/plugin-proposal-private-property-in-object", { loose: true }],
      ["@babel/plugin-proposal-class-properties", { loose: true }],
    ],
    loaderOptions: {},
    loaderOptions: (babelLoaderOptions, { env, paths }) => {
      return babelLoaderOptions;
    },
  },
};
