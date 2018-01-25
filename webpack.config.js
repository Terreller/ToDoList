module.exports = {
    // 入口文件
    entry: "./src/main.js",
    // 文件的处理方式
    module: {
        loaders: [
            {
                test: /\.js$/,
                // 排除文件目录 
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.(css|less)$/,
                loader: 'style-loader!css-loader!less-loader'
            }
        ]
    },
    // 输出设置
    output: {
        path: __dirname,
        filename: "src/bundle.js"
    }
}