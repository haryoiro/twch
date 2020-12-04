const readline = require('readline')

const readlineInterface = readline.createInterface({ 
    input: process.stdin,
    output: process.stdout
})

async function question(question) {
    return new Promise((resolver) => {
        readlineInterface.question(question, (answer) => {
            resolver(answer)
            readlineInterface.close()
        })
    })
}

module.exports = { 
    question
}