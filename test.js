import base64 from './index.js'
import test from 'tape'

const uint8Array = new TextEncoder().encode('hi')

test('base64', tape => {
  tape.plan(3)

  const base64Encoded = base64.encode(uint8Array)
  tape.ok(base64Encoded.length === 4, 'can encode')
  
  tape.ok(base64.isBase64(base64Encoded), 'is base64String')

  const base64Decoded = base64.decode(base64Encoded)
  
  const string = new TextDecoder().decode(base64Decoded)

  tape.ok(string === 'hi', 'can decode')
})
