module.exports = function () {
    const { PATH, isDevelopment } = this;

    return ({
        entry: {
            index: ["@babel/polyfill", `${PATH.entry}/index.ts`]
        },
        output: {
            path: isDevelopment ? PATH.development : PATH.production,
            publicPath: '/',
            filename: '[name].js'
        },
        resolve: {
            extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
        },
    });
};
