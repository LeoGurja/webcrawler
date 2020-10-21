const net = require('net')
const Uri = require('./uri')
const Response = require('./response')

module.exports = function get(uri, callback) {
  const parsedUri = new Uri(uri)
  const client = new net.Socket()
  client.connect(80, parsedUri.url)
  let responseText = ''

  client.on('connect', () => {
    client.write(`GET ${parsedUri.routePath}\n`)
  })

  client.on('data', data => {
    responseText += data.toString()
  })

  client.on('close', () => {
    callback(new Response(responseText.toString()))
  })
}
