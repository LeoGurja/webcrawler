module.exports = class Uri {
  constructor(string) {
    if (string.match(/:\/\//)) {
      string = string.split(/:\/\//)[1]
    }

    [this.url, ...this.path] = string.split('/')

    if (this.url.includes(':')) {
      [this.url, this.port] = this.url.split(':')
      this.port = parseInt(this.port)
    } else {
      this.port = 80
    }
  }

  get routePath() {
    return '/' + this.path.join('/')
  }
}
