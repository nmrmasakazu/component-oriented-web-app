import Express from 'express'
import fetch from 'cross-fetch'
import { host, port } from '../../../const'

const promiseTableRouter = Express.Router()

promiseTableRouter.get('/promisetable/:username', async (req, res) => {
    const options = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${req.cookies.authToken}`,
            'Content-Type': 'application/json'
        }
    }
    const response = await fetch(`http://${host}:${port}/api/promise/promisetable/${req.params.username}`, options)
    if (response.status.toString()[0] === '5') {
        return res.status(response.status).send({ message: response.statusText })
    }

    const json = await response.json()
    
    if (response.status !== 200) {
        return res.status(response.status).send({ message: json.message})
    }
    return res.status(200).json(json)
})

promiseTableRouter.get('/promisedetail/:name/:id', async (req, res) => {
    const options = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${req.cookies.authToken}`,
            'Content-Type': 'application/json'
        }
    }
    const response = await fetch(`http://${host}:${port}/api/promise/promisedetail/${req.params.name}/${req.params.id}`, options)
    if (response.status.toString()[0] === '5') {
        return res.status(response.status).send({ message: response.statusText })
    }

    const json = await response.json()
    
    if (response.status !== 200) {
        return res.status(response.status).send({ message: json.message})
    }
    return res.status(200).json(json)
})

promiseTableRouter.post('/updatepromise', async (req, res) => {

    const options = {
        method: 'POST',
        body: JSON.stringify(req.body),
        headers: {
            'Authorization': `Bearer ${req.cookies.authToken}`,
            'Content-Type': 'application/json'
        }
    }
    const response = await fetch(`http://${host}:${port}/api/promise/updatepromise`, options)
    if (response.status.toString()[0] === '5') {
        return res.status(response.status).send({ message: response.statusText })
    }

    const json = await response.json()

    if (response.status !== 200) {
        return res.status(response.status).send({ message: json.message })
    }

    return res.status(200).send(json)
})

promiseTableRouter.get('/promisetableclient', async (req, res) => {
    const options = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${req.cookies.authToken}`,
            'Content-Type': 'application/json'
        }
    }
    const response = await fetch(`http://${host}:${port}/api/promise/promisetableclient/`, options)
    if (response.status.toString()[0] === '5') {
        return res.status(response.status).send({ message: response.statusText })
    }

    const json = await response.json()
    
    if (response.status !== 200) {
        return res.status(response.status).send({ message: json.message})
    }
    return res.status(200).json(json)
})

promiseTableRouter.post('/updatepromiseclient', async (req, res) => {

    const options = {
        method: 'POST',
        body: JSON.stringify(req.body),
        headers: {
            'Authorization': `Bearer ${req.cookies.authToken}`,
            'Content-Type': 'application/json'
        }
    }
    const response = await fetch(`http://${host}:${port}/api/promise/updatepromiseclient`, options)
    if (response.status.toString()[0] === '5') {
        return res.status(response.status).send({ message: response.statusText })
    }

    const json = await response.json()

    if (response.status !== 200) {
        return res.status(response.status).send({ message: json.message })
    }

    return res.status(200).send(json)
})

export default promiseTableRouter
