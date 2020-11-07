import Express from 'express'
import fetch from 'cross-fetch'

const apiRouter = Express.Router()

// localhostのみアクセスの許可
apiRouter.use(function(req, res, next){
    var hostname = req.headers.host;
    if( hostname == null || hostname == undefined ){
      res.send(400);
      return
    }
    if(hostname.match(/^localhost/) != null){
      next()
    } else {
      res.send(400)
    }
  })

apiRouter.get('/getName', (req, res) => {
	res.json({
        name: "masakazu"
    })
})

apiRouter.get('/auth', async (req, res) => {

  const response = await fetch('http://nginx-api:81/users/signin?username=admin&password=admin', {method: 'POST'})
  // tokenをUIに表示させるのはNG（今回はお試し）
  const token = await response.text()
  res.json({token: token})
})

export default apiRouter
