module.exports = class Uri {
  constructor(string) {
    if (string.match(/:\/\//)) {
      string = string.split(/:\/\//)[1]
    }

    [this.url, ...this.path] = string.split('/')

    if (this.url.match(/:/)) {
      [this.url, this.port] = this.url.split(':')
    } else {
      this.port = 80
    }
  }

  get uri() {
    return `https://${this.url}${this.routePath}`
  }

  get routePath() {
    return '/' + this.path.join('/')
  }
}
