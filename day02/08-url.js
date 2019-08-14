var url = require('url')

var obj = url.parse('/pinglun?name=sdfs&message=dsfghdghdghd', true)
console.log(obj)
console.log(obj.query)