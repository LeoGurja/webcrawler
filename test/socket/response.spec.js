const Response = require('../../src/socket/response')

test('should parse status code', () => {
  const response = new Response('HTTP/1.1 204 No Content\n\n')

  expect(response.statusCode).toBe(204)
})

test('should parse status name', () => {
  const response = new Response('HTTP/1.1 204 No Content\n\n')
  expect(response.status).toBe('No Content')
})

test('should parse headers', () => {
  const response = new Response(`HTTP/1.1 204 No Content
Content-Type: application/json
Content-Length: 0`)

  expect(response.headers['Content-Type']).toBe('application/json')
  expect(response.headers['Content-Length']).toBe('0')
})

test('should parse body', () => {
  const response = new Response(`HTTP/2.0 200 OK
Content-Type: application/json

{}
`)

  expect(response.body).toBe('{}')
})
