const Uri = require('../../src/socket/uri')

test('should split uris correctly', () => {
  const uri = new Uri('www.google.com')
  expect(uri.url).toBe('www.google.com')
  expect(uri.routePath).toBe('/')
})

test('should return url', () => {
  const uri = new Uri('www.google.com/')
  expect(uri.url).toBe('www.google.com')
})

test('should return route path', () => {
  const uri = new Uri('www.fb.com/')
  expect(uri.routePath).toBe('/')
})

test('should parse custom port', () => {
  const uri = new Uri('localhost:5500/')
  expect(uri.url).toBe('localhost')
  expect(uri.port).toBe(5500)
})

test('should ignore explicit protocol', () => {
  const uri = new Uri('https://www.stackoverflow.com/')
  expect(uri.url).toBe('www.stackoverflow.com')
})
