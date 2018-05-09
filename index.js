const fs = require('fs')
const path = require('path')
const command = process.argv[2]
const [ nodePath, filePath, ...arguments ] = process.argv
const list = path.join(__dirname, 'list.txt')
let listString = fs.readFileSync(list, 'utf-8')

if (command) {
  for (let i = 0; i < arguments.length; i++) {
    const dataString = listString

    if (command === 'show') {
      if (dataString.includes('\n')) {
        let filteredData = dataString.split('\n').filter(function(n) { return n !== '' })

        for (let k = 0; k < filteredData.length; k++) {
          if (k === 0) {
            console.log(filteredData[k]);
          } else {
            console.log(`${k}. ${filteredData[k]}`);
          }
        }
      }
    } else if (command.match(/remove \d/) !== null) {
      const indexToRemove = parseInt(command[command.length - 1], 10)
      let filteredData = dataString.split('\n').filter(function(n) { return n !== '' })
      listString = ''

      for (let k = 0; k < filteredData.length; k++) {
        if (indexToRemove !== k) { listString = listString + filteredData[k] + '\n' }
      }
    } else {
      listString = listString + arguments[i] + '\n'
    }
  }

  fs.writeFileSync(list, listString)
}
