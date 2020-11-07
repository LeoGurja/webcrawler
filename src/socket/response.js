module.exports = class Response {
  constructor(buffer) {
    this.rawData = buffer
    this.lines = buffer.toString().split(/\r\n|\r|\n/)
    this.parseFirstLine(this.lines.shift())
    this.parseHeaders(this.lines.splice(0, getEmptyLineIndex(this.lines)))
    this.body = this.lines.join('\n').trim()
  }

  parseHeaders(headerLines) {
    this.headers = {}
    for (const line of headerLines) {
      const [key, value] = line.split(':')
      this.headers[key] = value ? value.trim() : ''
    }
  }

  parseFirstLine(line) {
    const [version, statusCode, ...statusStrings] = line.split(/\s/)
    this.httpVersion = version
    this.statusCode = parseInt(statusCode)
    this.status = statusStrings.join(' ')
  }

  get rawBody() {
    return this.rawData.slice(this.rawData.length - parseInt(this.headers['Content-Length']))
  }
}

function getEmptyLineIndex(list) {
  for (let index = 0; index < list.length; index++) {
    if (list[index] === '') return index
  }
  return list.length
}
