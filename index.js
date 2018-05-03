const fs = require('fs')
const path = require('path')
const command = process.argv[2]

const list = path.join(__dirname, 'list.txt')
if (command) {
  fs.writeFileSync(list, command)
}
