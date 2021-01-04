import http from 'http'
import url from 'url'
import httpProxy from 'http-proxy'
import cookie from 'cookie'
import fetch from 'cross-fetch'

const port = 8090
var origin = 'http://minio:9000'

const blocked = (res: any) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.write('403 forbidden');
  res.end()
}

const requestHandler = async (req: any, res: any) => {

  const urlobj = url.parse(req.url, true)
  // console.log(req.method + ' ' + urlobj.pathname)
  const proxy = httpProxy.createProxyServer()

  try {
    // imgs bucket なら認証
    if (urlobj.pathname && urlobj.pathname!.match(/^\/imgs\//)) {
      const cookies = cookie.parse(req.headers.cookie)
      const options = {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${cookies.authToken}`,
          'Content-Type': 'application/json'
        }
      }
      const response = await fetch(`http://${process.env.HOST}:8080/api/users/me`, options)
      // console.log(await response.json())
      if (response.status !== 200) {
        blocked(res)
      } else {
        proxy.web(req, res, { target: origin })
      }
    } else {
      proxy.web(req, res, { target: origin })
    }
  } catch {
    blocked(res)
  }
}

const server = http.createServer()
http.createServer(requestHandler).listen(port)

console.log('listening http://storage-gateway:' + port)
