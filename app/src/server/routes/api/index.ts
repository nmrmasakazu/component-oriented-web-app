import Express from 'express'

const apiRouter = Express.Router()

// localhostのみOK
// https://mironal-memo.blogspot.com/2012/12/nodeexpresshost.html
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

export default apiRouter
