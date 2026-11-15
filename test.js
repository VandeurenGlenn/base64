import base64 from './index.js'
import assert from 'node:assert/strict'
import test from 'node:test'

const uint8Array = new TextEncoder().encode('hi')

test('base64', () => {
  const base64Encoded = base64.encode(uint8Array)
  assert.equal(base64Encoded.length, 3)
  assert.equal(base64.isBase64(base64Encoded), true)

  const base64Decoded = base64.decode(base64Encoded)
  const string = new TextDecoder().decode(base64Decoded)
  assert.equal(string, 'hi')
})

test('isBase64 accepts only the base64 alphabet', () => {
  assert.equal(base64.isBase64(''), true)
  assert.equal(base64.isBase64('AZaz09-_'), true)
  assert.equal(base64.isBase64('a b'), false)
  assert.equal(base64.isBase64('abc\n'), false)
  assert.equal(base64.isBase64(123), false)
})
