var fs = require('fs')

function bancos() {}

bancos.prototype.getLastBanks = function(callback) {
    fs.readFile('./data/bancos.json', 'utf8', (err, result) => {
        if (err) {
            return callback(err, [])
        }

        try {
            const obj = JSON.parse(result)
            const bancos = obj.bancos.slice()

            callback(null, bancos)
        } catch (jsonErr) {
            callback(jsonErr, [])
        }
    })
}

module.exports = function() {
    return bancos;
}