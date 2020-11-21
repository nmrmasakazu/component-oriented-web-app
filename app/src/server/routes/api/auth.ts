import Express from 'express'
import fetch from 'cross-fetch'

const authRouter = Express.Router()

authRouter.post('/login', async (req, res) => {

    const response = await fetch(`http://localhost:81/users/signin?username=${req.query.username}&password=${req.query.password}`, { method: 'POST' })
    
    if (response.status !== 200) {
        return res.status(404).send({message: 'NOT FOUND'})
    }
    const token = await response.text()

    res.status(200).json({ token: token })

})

export default authRouter
