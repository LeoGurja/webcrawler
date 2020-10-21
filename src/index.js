const fs = require('fs')
const path = require('path')
const get = require('./socket')

get('https://www.google.com/', response => {
  fs.writeFileSync(path.join(__dirname, '../output/out.txt'), response.body)
})
