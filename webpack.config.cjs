// @ts-check
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const PreactRefreshPlugin = require('@prefresh/webpack')
const CopyPlugin = require('copy-webpack-plugin')

/** @returns { import('webpack').Configuration } */
module.exports = (env, argv) => {
    const mode = argv.mode
    const isDevelopment = mode === "development"
    return {
        target: 'web',
        entry: './src/index.tsx',
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist'),
            clean: true
        },
        mode: isDevelopment ? 'development' : 'production',
        devtool: 'inline-source-map',
        devServer: {
            port: 8080,
            hot: true,
            static: './dist',
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "src/index.html",
            }),
            new CopyPlugin({
                patterns: [
                    {
                        from: "public",
                        to: "./"
                    }
                ],
            }),
            new ForkTsCheckerWebpackPlugin(),
            new PreactRefreshPlugin(),
        ],
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
            /** https://preactjs.com/guide/v10/getting-started#aliasing-in-webpack */
            "alias": {
                "react": "preact/compat",
                "react-dom/test-utils": "preact/test-utils",
                "react-dom": "preact/compat",
                "react/jsx-runtime": "preact/jsx-runtime"
            },
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: require.resolve('ts-loader'),
                            options: {
                                transpileOnly: true,
                            },
                        },
                    ]
                },
                {
                    test: /\.s?css$/i,
                    use: ['style-loader', 'css-loader', 'sass-loader'],
                },
                {
                    test: /\.svg$/i,
                    issuer: /\.[jt]sx?$/,
                    use: ['@svgr/webpack'],
                },
                {
                    test: /\.(png|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                }
            ],
        }
    }
}