import Express from 'express'
import fetch from 'cross-fetch'
import { host, port } from '../../../const'

const authRouter = Express.Router()

authRouter.post('/login', async (req, res) => {

    const response = await fetch(`http://${host}:${port}/users/signin?username=${req.query.username}&password=${req.query.password}`, { method: 'POST' })
    .catch( _ => {
        return res.status(404).send({message: 'APIに接続できません'})
    })
    
    if (response.status !== 200) {
        const json = await response.json()
        return res.status(404).send({message: json.message})
    }

    const json = await response.json()
    res.status(200).json({ token: json.token })

})

authRouter.post('/signup', async (req, res) => {

    const options = {
        method: 'POST',
        body:    JSON.stringify(req.body),
        headers: {
            'Authorization': `Bearer ${req.cookies.authToken}`,
            'Content-Type': 'application/json'
        }
    }

    console.log(options)
    const response = await fetch(`http://localhost:8080/users/signup`, options)
    
    if (response.status !== 200) {
        return res.status(404).send({message: 'ユーザーネームもしくはパスワードが登録済みの可能性があります'})
    }

    res.status(200).json({ message: '' })

})

export default authRouter
