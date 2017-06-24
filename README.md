# enable-stream [![Build Status](https://travis-ci.org/AGrzes/enable-stream.svg?branch=master)](https://travis-ci.org/AGrzes/enable-stream) [![Coverage Status](https://coveralls.io/repos/github/AGrzes/enable-stream/badge.svg?branch=master)](https://coveralls.io/github/AGrzes/enable-stream?branch=master)
Utility for enabling/disabling streams in pipeline

# Usage
```
var es = require('enable-stream)

es(source,sourceEnabled).pipe(es(transform,transformEnabled)).pipe(destination)
```

if a function creating a stream is passed to `enable-stream` then it is called only when stream is enabled. 
