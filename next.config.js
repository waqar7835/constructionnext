/* eslint-disable */
const withLess = require("@zeit/next-less");
const withCSS = require("@zeit/next-css");
const lessToJS = require("less-vars-to-js");
const fs = require("fs");
const path = require("path");
const withImages = require("next-images");
// const nextBuildId = require("next-build-id");

module.exports = withImages();

// Where your antd-custom.less file lives
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, "./assets/antd-custom.less"), "utf8")
);

module.exports = withCSS(
  withLess({
    crossOrigin: "anonymous",
    lessLoaderOptions: {
      javascriptEnabled: true,
      modifyVars: themeVariables, // make your antd custom effective
    },
    webpack: (config, { isServer }) => {
      if (isServer) {
        const antStyles = /antd\/.*?\/style.*?/;
        const origExternals = [...config.externals];
        config.externals = [
          (context, request, callback) => {
            if (request.match(antStyles)) return callback();
            if (typeof origExternals[0] === "function") {
              origExternals[0](context, request, callback);
            } else {
              callback();
            }
          },
          ...(typeof origExternals[0] === "function" ? [] : origExternals),
        ];

        config.module.rules.unshift({
          test: antStyles,
          use: "null-loader",
        });
      }
      config.resolve.alias = {
        ...config.resolve.alias,
        components: path.resolve(__dirname, "components"),
        services: path.resolve(__dirname, "services"),
        store: path.resolve(__dirname, "store"),
        config: path.resolve(__dirname, "config"),
      };
      return config;
    },
    generateBuildId: () => "js",
    // generateBuildId: () => nextBuildId({ dir: __dirname }),
  })
);
