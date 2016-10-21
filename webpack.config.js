module.exports = {
    entry: './client/jsx/ClientApp.jsx',

    output: {
        path: __dirname + '/client/',
        filename: 'bundle.js'
    },

    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    },
    
    devServer: {
        inline: true,
        port: 8080,
        contentBase: __dirname + '/client/'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['react-hot', 'babel?' + JSON.stringify({
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                })],
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    }
};