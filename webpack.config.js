const path = require('path')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/main.ts'),
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        configFile: path.resolve(__dirname, 'tsconfig.json')
                    },
                }, 'source-map-loader'],
            }
        ]
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, 'src'),
        },
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        libraryTarget: 'umd',
        library: 'somelib',
        umdNamedDefine: true,
    },
    devtool: 'inline-source-map'
}