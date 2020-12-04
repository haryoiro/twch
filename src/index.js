require('dotenv').config()
const tmi = require('tmi.js')
const chalk = require('chalk')
const log = console.log

const { onTwitchChatHandler } = require('./handlers')

const { openBrowser } = require('./gui/redeem')
const { createOption } = require('./config/config')
const { question } = require('./utils/question')

async function main() {
    try {

        // ex. shroud
        const channels = await question('channel name: ')

        // チャットにキャンペーンコードが流れたとき、自動でフォームに入力するなどの用途で使用する。
        // 普通にコンソールでチャットを見るだけならなしで良い。
        // const isOpenBrowser = await question('Open browser? [y/N]: ')

        // twitchに接続
        const client = new tmi.client(createOption(channels))
        await client.on('message', (target, context, msg, self) => {
            onTwitchChatHandler(target, context, msg, self)
            // const page = browserContext(isOpenBrowser)
        })
        
        await client.on('connected', onConnectedHandler)
        await client.connect()

    } catch (err) {
        log(chalk.red(err))
    }

}

/**
 * チャンネルへの接続が成功した際表示するログ
 */
function onConnectedHandler(addr, port) {
    log(`Welcome! connected to Twitch chat ${addr}:${port}`)
}

function browserContext(isOpen) {
    return isOpen.match(/[yY]/)
        ? openBrowser(channels)
        : undefined
}

main()