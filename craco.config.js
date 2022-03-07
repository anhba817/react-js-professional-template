const path = require("path");
const sass = require("sass");
const { ESLINT_MODES } = require("@craco/craco");

module.exports = {
  style: {
    eslint: {
      mode: ESLINT_MODES.file,
    },
    sass: {
      loaderOptions: {
        // Prefer 'sass' (dart-sass) over 'node-sass' if both packages are installed.
        implementation: sass,
        // Workaround for this bug: https://github.com/webpack-contrib/sass-loader/issues/804
        webpackImporter: false,
      },
    },
  },
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@utils": path.resolve(__dirname, "src/utils/"),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        "^@components(.*)$": "<rootDir>/src/components$1",
        "^@pages(.*)$": "<rootDir>/src/pages$1",
        "^@utils(.*)$": "<rootDir>/src/utils$1",
      },
    },
  },
};
