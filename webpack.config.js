// webpack should be in the node_modules directory, install if not.
const webpack = require("webpack");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const keysTransformer = require('ts-transformer-keys/transformer').default;
const Dotenv = require('dotenv-webpack');

var config = {
    entry: [
        "./src/App.tsx"
    ],
    output: {
        filename: "formulairesAccueil.js",
        path: __dirname + "/dist",
        library: "FormulairesAccueil",
        libraryTarget: "umd", //"var" "commonjs" "umd"
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: {
                  getCustomTransformers: program => ({
                    before: [
                      keysTransformer(program)
                    ]
                  })
                }
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                test: /\.tsx?$/,
                enforce: "pre",
                loader: "source-map-loader"
            }
        ]

    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                context: __dirname
            },
            debug: true
        }),
        new CopyWebpackPlugin({
          patterns: [
            {from: 'static/*.css'}
        ]}),
        new HtmlWebpackPlugin({
            template: 'static/index.html'
        }),
        new Dotenv({
            systemvars: true
        })
    ]
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    // Enable sourcemaps for debugging webpack's output.
    config.devtool = 'source-map';

    config.devServer = {
      host: '0.0.0.0',
      disableHostCheck: true
    }

  }
//  if (argv.mode === 'production') {
        //...
//  }

  return config;
};
