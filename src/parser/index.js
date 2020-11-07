const { JSDOM } = require('jsdom')

module.exports.getImages = html => {
  const { document } = new JSDOM(html).window
  return [...document.querySelectorAll('img')]
}
