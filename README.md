# base64

module compatible base64

## Usage

``` js
import base64 from '@vandeurenglenn/base64'

const uint8Array = new TextEncoder().encode('hi')

const base64Encoded = base64.encode(uint8Array)

console.log(base64Encoded) // 2dj

const base64Decoded = base64.decode(base64Encoded)

const string = new TextDecoder().decode(base64Decoded)

console.log(string) // hi
```
