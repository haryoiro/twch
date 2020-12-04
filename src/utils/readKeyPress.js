const keypress = require('keypress')

function readKeyPress() {
    keypress(process.stdin)
    if (process.stdin.isTTY) {
        process.stdin.setRawMode(true)
        process.stdin.resume()
    }
    let keys = ''
    process.stdin.on('keypress', (c, k) => {
        console.log(c,k)
        if (k.name === 'enter') {
            process.stdin.pause();
            console.log(keys)
        }
    })
}

module.exports = {
    readKeyPress
}