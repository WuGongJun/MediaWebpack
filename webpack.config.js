const path =require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports= {
    entry: {
        common: './src/assets/js/common.js',
        entry: './src/assets/js/entry.js'
    },
    output: {
        path:path.resolve(__dirname, 'dist'),
        filename:'js/[name].js'
    },
    module: {
        loaders: [
            {
                test: /.js$/,
                enforce: 'post', // post-loader处理
                loader: 'es3ify-loader'
            },
            // { test: /\.css$/, loader: 'style-loader!css-loader!less-loader?!postcss-loader' },
            {
                test:/\.css$/,
                use:ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            { test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/, loader: 'file-loader' },
            {
                test: require.resolve('jquery-compat'), //require.resolve 用来获取模块的绝对路径
                use: [{
                    loader: 'expose-loader',
                    options: 'jQuery'
                }, {
                    loader: 'expose-loader',
                    options: '$'
                }]
            }
        ]
    },
    plugins:[
        //这里会按照output的路径打包到css文件夹下面对应的css的名字
        new ExtractTextPlugin('css/[name].css')
    ],
    devServer:{
        host:'localhost',
        port:8000
    },
    node: {
        fs: "empty"
    }

};

