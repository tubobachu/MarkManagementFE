module.exports = {
    // ...
    devServer: {
        open: process.platform === 'darwin',
        host: 'localhost',
        port: 6868, // CHANGE YOUR PORT HERE!
        https: false,
        hotOnly: false,
    },
    // ...
}