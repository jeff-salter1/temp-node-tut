const http = require('http')

const server = http.createServer((req, res) => {

if(req.url === `/`){
  return res.end('Welcome to our home page now')  
}
if(req.url === `/about`){
   return res.end('Here is our short history')
}
return res.end(`
<h1>Ooops!</h1>
<p>We can't seem to find the page</p>
<a href="/">back home</a>
`)
})

server.listen(5000)
