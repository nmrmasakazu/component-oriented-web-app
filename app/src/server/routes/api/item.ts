import Express from 'express'
import fetch from 'cross-fetch'
import { host, port, apiNotFound } from '../../../const'

const itemRouter = Express.Router()

// ch: 挑戦項目
itemRouter.get('/itemch', async (req, res) => {
    const options = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${req.cookies.authToken}`,
            'Content-Type': 'application/json'
        }
    }
    const response = await fetch(`http://${host}:${port}/api/item/itemch`, options)
    if (response.status.toString()[0] === '5') {
        return res.status(response.status).send({ message: response.statusText })
    }

    const json = await response.json()
    
    if (response.status !== 200) {
        return json.message
    }
    res.status(200).json(json)
})

itemRouter.post('/additemch', async (req, res) => {
    const options = {
        method: 'POST',
        body: JSON.stringify(req.body),
        headers: {
            'Authorization': `Bearer ${req.cookies.authToken}`,
            'Content-Type': 'application/json'
        }
    }
    const response = await fetch(`http://${host}:${port}/api/item/additemch`, options)
    if (response.status.toString()[0] === '5') {
        return res.status(response.status).send({ message: response.statusText })
    }

    const json = await response.json()
    
    if (response.status !== 200) {
        return res.status(404).send({message: json.message})
    }
    res.status(200).json(json)
})

itemRouter.delete('/removeitemch/:id', async (req, res) => {
    const options = {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${req.cookies.authToken}`,
            'Content-Type': 'application/json'
        }
    }
    const response = await fetch(`http://${host}:${port}/api/item/removeitemch/${req.params.id}`, options)
    if (response.status.toString()[0] === '5') {
        return res.status(response.status).send({ message: response.statusText })
    }

    const json = await response.json()

    if (response.status !== 200) {
        return res.status(404).send({message: json.message})
    }
    res.status(200).json(json)
})

// tr: トレーニング項目
itemRouter.get('/itemtr', async (req, res) => {
    const options = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${req.cookies.authToken}`,
            'Content-Type': 'application/json'
        }
    }
    const response = await fetch(`http://${host}:${port}/api/item/itemtr`, options)
    if (response.status.toString()[0] === '5') {
        return res.status(response.status).send({ message: response.statusText })
    }

    const json = await response.json()

    if (response.status !== 200) {
        return res.status(404).send({message: json.message})
    }
    res.status(200).json(json)
})

itemRouter.post('/additemtr', async (req, res) => {
    const options = {
        method: 'POST',
        body: JSON.stringify(req.body),
        headers: {
            'Authorization': `Bearer ${req.cookies.authToken}`,
            'Content-Type': 'application/json'
        }
    }
    const response = await fetch(`http://${host}:${port}/api/item/additemtr`, options)
    if (response.status.toString()[0] === '5') {
        return res.status(response.status).send({ message: response.statusText })
    }

    const json = await response.json()
    if (response.status !== 200) {
        return res.status(404).send({message: json.message})
    }
    res.status(200).json(json)
})

itemRouter.delete('/removeitemtr/:id', async (req, res) => {
    const options = {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${req.cookies.authToken}`,
            'Content-Type': 'application/json'
        }
    }
    const response = await fetch(`http://${host}:${port}/api/item/removeitemtr/${req.params.id}`, options)
    if (response.status.toString()[0] === '5') {
        return res.status(response.status).send({ message: response.statusText })
    }

    const json = await response.json()

    if (response.status !== 200) {
        return res.status(404).send({message: json.message})
    }
    res.status(200).json(json)
})

export default itemRouter
