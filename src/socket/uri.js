module.exports = class Uri {
  constructor(string) {
    [this.protocol, string] = string.split('://');
    [this.subDomain, this.domain, string] = string.split('.');
    [this.topLevelDomain, this.path] = string.split('/')
  }

  get uri() {
    return `${this.protocol}://${this.subDomain}.${this.domain}.${this.topLevelDomain}/${this.path}`
  }

  get url() {
    return `${this.subDomain}.${this.domain}.${this.topLevelDomain}`
  }

  get routePath() {
    return '/' + this.path
  }
}
