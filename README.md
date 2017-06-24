# enable-stream 
Utility for enabling/disabling streams in pipeline

# Usage
```
var es = require('enable-stream)

es(source,sourceEnabled).pipe(es(transform,transformEnabled)).pipe(destination)
```

if a function creating a stream is passed to `enable-stream` then it is called only when stream is enabled. 
