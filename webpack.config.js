const NODE_ENV = process.env.NODE_ENV;
module.exports = NODE_ENV === 'development'
    ? require('./webpack.config.dev')
    : require('./webpack.config.prod');