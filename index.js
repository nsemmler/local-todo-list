const fs = require('fs')
const path = require('path')
const command = process.argv[2]
const list = path.join(__dirname, 'list.txt')

const read = () => {
  return fs.readFileSync(list, 'utf-8').split('\n')
}

const show = () => {
  const contents = read()
    .map((item, i) => `${ i + 1 }: ${ item }`)
    .join('\n')

  console.log(contents)
}

if (command === 'show') {
  show()
} else if (command.includes('remove')) {
  const num = command.split(' ')[1]
  const contents = read()
  contents.splice(num - 1, 1)

  fs.writeFileSync(list, contents.join('\n'))
  show()
} else if (command) {
  const contents = read()
  contents.push(command)

  fs.writeFileSync(list, contents.join('\n'))
  show()
}
