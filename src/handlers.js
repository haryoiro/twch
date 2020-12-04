const log = console.log

const {
    transformDisplayName
} = require('./chatlog')

// target   : targetChannelName
// context  : チャットメッセージ以外の詳細情報
async function onTwitchChatHandler(target, context, message, self, cb) {
    try {
        if (self) return;
        if (message) log(transformDisplayName(context, message))
    } catch (err) {
        log(err)
    }
}


module.exports = {
    onTwitchChatHandler
}