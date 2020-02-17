const {promisify} = require('util')
const fs = require('fs')
const exec = promisify(require('child_process').exec)

const db_url = 'https://jsonplaceholder.typicode.com/db'

function migrate() {
  fs.exists('db.json', async exists => {
    if (!exists) {
      await exec(`curl ${db_url} -o db.json`)
    } else {
      console.log('DB already exists')
    }
  })
}

module.exports = {
  migrate
}
