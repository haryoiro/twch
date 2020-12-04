const chalk = require('chalk')

/**
 * 
 * @param {*} pattern 抽出する文字列
 * @param {*} message メッセージ本体
 */
function getCodeByMsg(pattern, message) {
    return message.slice(pattern.length)
}

/**
 * 
 * @param {*} context : 発信ユーザに関する情報
 * @param {*} message ︰ 本文
 * 色が設定されていれば発信ユーザの表示色を対応した色で表示する。
 */
function transformDisplayName(context, message) {
    const { 
        username, 
        displayName,
        color,
        badges
    } = context
    const badge = userBadges(badges)

    return (color !== null) 
        ? `${badge}[${chalk.hex(color).bold(username)}]  ${chalk.hex('#FFFFFF')(message)}`
        : `${badge}[${chalk.white(username)}]  ${chalk.hex('#FFFFFF')(message)}`
    
}

/**
 * @param {string} badges 
 * 受け取ったパラメータにバッジのデータが含まれていれば対応する絵文字を返す。
 */
function userBadges(badges) {
    let badgeContaints = chalk.black(' ')

    if (!badges) return badgeContaints
    if (badges.premium) badgeContaints += chalk.blue('👑')
    if (badges.moderator) badgeContaints += chalk.greenBright('[🗡]')
    if (badges.partner) badgeContaints += chalk.redBright('[✔]')

    return badgeContaints
}

module.exports = {
    getCodeByMsg,
    transformDisplayName
}