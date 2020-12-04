function createOption(channels) {
    return {
        connection: {
            reconnect: true,
            secure: true
        },
        identity: {
            username: process.env.TWITCH_USERNAME,
            password: process.env.TWITCH_PASSWORD,
        },
        channels: [ channels ]
    }
}


module.exports = {
    createOption
}