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

test('should return full uri', () => {
  const testUri = 'https://www.stackoverflow.com/'
  const uri = new Uri(testUri)
  expect(uri.uri).toBe(testUri)
})
