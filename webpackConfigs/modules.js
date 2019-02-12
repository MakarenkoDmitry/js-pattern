const autoprefixer = require('autoprefixer');

module.exports = function () {
    const { isDevelopment, PATH } = this;

    return ({
        module: {
            rules: [
                {
                    test: /\.(ts)$/,
                    enforce: 'pre',
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'tslint-loader',
                            options: {
                                configFile: './tslint.json'
                            }
                        }
                    ]
                },
                {
                    test: /\.(js|jsx|ts|tsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                "@babel/preset-env",
                                "@babel/preset-typescript"
                            ],
                            plugins: [
                                "transform-class-properties",
                                ["@babel/plugin-proposal-decorators", { "decoratorsBeforeExport": true }]
                            ]
                        }
                    }
                }
            ]
        },
    });
};
