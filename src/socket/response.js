module.exports = class Response {
  constructor(string) {
    this.lines = string.split(/\r\n|\r|\n/);
    [this.httpVersion, this.statusCode, this.status] = this.lines.shift().split(/\s/)
    this.parseHeaders(this.lines.splice(0, getEmptyLineIndex(this.lines)))
    this.body = this.lines.join('\n')
  }

  parseHeaders(headerLines) {
    this.headers = {}
    for (const line of headerLines) {
      const [key, value] = line.split(':')
      this.headers[key] = value ? value.trim() : ''
    }
  }
}

function getEmptyLineIndex(list) {
  for (let index = 0; index < list.length; index++) {
    if (list[index] === '') return index
  }
  return list.length
}
