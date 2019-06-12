const path = require( 'path' );

const config = {
    entry: {
        frontend: './src/frontend/frontend-index.js',
        admin: './src/admin/admin-index.js'
    },

    output: {
        filename: 'js/[name].js',
        path: path.resolve( __dirname, 'assets' )
    },

    externals: {
        jquery: 'jQuery'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};

module.exports = config;