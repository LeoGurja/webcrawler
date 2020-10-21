const Uri = require('../../src/socket/uri')

test('should split uris correctly', () => {
  const uri = new Uri('https://www.google.com/')
  expect(uri.protocol).toBe('https')
  expect(uri.subDomain).toBe('www')
  expect(uri.domain).toBe('google')
  expect(uri.topLevelDomain).toBe('com')
  expect(uri.path).toBe('')
})

test('should return url', () => {
  const uri = new Uri('https://www.google.com/')
  expect(uri.url).toBe('www.google.com')
})

test('should return route path', () => {
  const uri = new Uri('https://www.fb.com/')
  expect(uri.routePath).toBe('/')
})

test('should return full uri', () => {
  const testUri = 'https://www.stackoverflow.com/'
  const uri = new Uri(testUri)
  expect(uri.uri).toBe(testUri)
})
