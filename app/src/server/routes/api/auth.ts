import Express from 'express'
import fetch from 'cross-fetch'
import { host, port, apiNotFound } from '../../../const'

const authRouter = Express.Router()

authRouter.post('/login', async (req, res) => {

    const response = await fetch(`http://${host}:${port}/api/users/signin?username=${req.query.username}&password=${req.query.password}`, { method: 'POST' })
    if (response.status.toString()[0] === '5') {
        return res.status(response.status).send({ message: response.statusText })
    }

    const json = await response.json()
    if (response.status !== 200) {
        return res.status(response.status).send({ message: json.message })
    }

    return res.status(200).json({ token: json.token })
})

authRouter.post('/signup', async (req, res) => {

    const options = {
        method: 'POST',
        body: JSON.stringify(req.body),
        headers: {
            'Authorization': `Bearer ${req.cookies.authToken}`,
            'Content-Type': 'application/json'
        }
    }
    const response = await fetch(`http://${host}:${port}/api/users/signup`, options)
    if (response.status.toString()[0] === '5') {
        return res.status(response.status).send({ message: response.statusText })
    }

    const json = await response.json()

    if (response.status !== 200) {
        return res.status(404).send({ message: json.message })
    }

    return res.status(200).send(json)
})

authRouter.get('/clients', async (req, res) => {

    const options = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${req.cookies.authToken}`,
            'Content-Type': 'application/json'
        }
    }
    const response = await fetch(`http://${host}:${port}/api/users/clients`, options)
    if (response.status.toString()[0] === '5') {
        return res.status(response.status).send({ message: response.statusText })
    }

    const json = await response.json()

    if (response.status !== 200) {
        return res.status(404).send({ message: json.message })
    }

    return res.status(200).json(json)
})

export default authRouter
