const getReponse = require('./socket')

getReponse('https://www.google.com/', data => {
  console.log(data.toString())
})
