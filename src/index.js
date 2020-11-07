const fs = require('fs')
const path = require('path')
const get = require('./socket')
const { getImages } = require('./parser')

let index = 0

const site = process.argv[2]
get(site, response => {
  fs.writeFileSync(path.join(__dirname, `../output/out.${getResponseType(response)}`), response.body)

  getImages(response.body).forEach(saveImage)
})

function saveImage(img) {
  get(`www.google.com${img.src}`, response => {
    fs.writeFileSync(path.join(__dirname, `../output/${img.alt || index++}.${getResponseType(response)}`), response.rawBody)
  })
}

function getResponseType(response) {
  return response.headers['Content-Type'].split(/[/;]/)[1]
}
