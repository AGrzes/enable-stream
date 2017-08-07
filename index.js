var miss = require('mississippi')
var devNull = require('dev-null')
module.exports = (stream, enabled) => enabled ? stream : miss.through()
module.exports.obj = (stream, enabled) => enabled ? stream : miss.through.obj()
module.exports.src = (stream, enabled) => enabled ? (stream.pipe ? stream : stream()) : miss.from((size, next) => next(null, null))
module.exports.src.obj = (stream, enabled) => enabled ? (stream.pipe ? stream : stream()) : miss.from.obj((size, next) => next(null, null))
module.exports.dst = (stream, enabled) => stream
module.exports.dst.obj = (stream, enabled) => enabled ? stream : devNull()
