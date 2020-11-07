const get = require('../../src/socket')

test('should get google.com', () => {
  get('https://www.google.com/', response => {
    expect(response.statusCode).toBe(200)
    expect(response.body.length).toBeGreaterThanOrEqual(1)
  })
})
