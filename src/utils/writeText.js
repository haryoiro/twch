const fs = require('fs')

function writeText(file, text) {
    fs.appendFileSync(file, text+'\n')
}

module.exports = {
    writeText
}