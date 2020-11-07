const net = require('net')
const Uri = require('./uri')
const Response = require('./response')

module.exports = function get(uri, callback) {
  const parsedUri = new Uri(uri)
  const client = new net.Socket()
  let buffer = Buffer.alloc(0)
  client.connect(parsedUri.port, parsedUri.url)
  client.on('connect', () => {
    client.write(`GET ${parsedUri.routePath} HTTP/1.0\r\n\r\n`)
  })

  client.on('data', data => {
    buffer = Buffer.concat([buffer, data])
  })

  client.on('close', () => {
    callback(new Response(buffer))
  })
}
