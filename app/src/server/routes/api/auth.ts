import Express from 'express'
import fetch from 'cross-fetch'

const authRouter = Express.Router()

authRouter.post('/login', async (req, res) => {

    const response = await fetch(`http://localhost:81/users/signin?username=${req.query.username}&password=${req.query.password}`, { method: 'POST' })
    
    if (response.status !== 200) {
        return res.status(404).send({message: 'ユーザーネームもしくはパスワードが違います'})
    }
    const token = await response.text()

    res.status(200).json({ token: token })

})

authRouter.post('/signup', async (req, res) => {

    console.log(req)

    const options = {
        method: 'POST',
        body:    JSON.stringify(req.body),
        headers: {
            'Authorization': `Bearer ${req.cookies.authToken}`,
            'Content-Type': 'application/json'
        }
    }

    console.log(options)
    const response = await fetch(`http://localhost:81/users/signup`, options)
    
    if (response.status !== 200) {
        return res.status(404).send({message: 'ユーザーネームもしくはパスワードが登録済みの可能性があります'})
    }

    res.status(200).json({ message: '' })

})

export default authRouter
