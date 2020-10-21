const net = require('net')
const Uri = require('./uri')

module.exports = function get(uri, callback) {
  const parsedUri = new Uri(uri)

  const client = new net.Socket()
  client.connect(80, parsedUri.url)

  client.on('connect', () => {
    client.write(`GET ${parsedUri.routePath}\n`)
  })

  client.on('data', callback)

  client.on('close', () => {})
}
