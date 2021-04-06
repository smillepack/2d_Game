const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   entry: {
     app: './src/index.js',
   },
   plugins: [
     new HtmlWebpackPlugin({
        template: './src/index.html',   
        title: 'Production',
     }),
   ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
    //  publicPath: '/',
     clean: true,
   },
   resolve: {
    alias: {
      Style:     path.resolve(__dirname, 'src/styles/'),
      Scripts:   path.resolve(__dirname, 'src/scripts/'),
      Images:    path.resolve(__dirname, 'src/images/'),
      ReactComp: path.resolve(__dirname, 'src/scripts/app/'),
      ReduxComp: path.resolve(__dirname, 'src/scripts/redux/'),
      
    }
  },
   module: {
    rules: [
        {
            test: /\.(js|jsx)/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            }
        },
        {
            test: /\.(sa|c)ss/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        },
        {
            test: /\.(png|svg|jpg|gif|ttf)$/,
            use: [
              'file-loader',
            ],
        }
    ]
}
 };