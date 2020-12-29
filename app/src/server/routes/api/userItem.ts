import Express from 'express'
import fetch from 'cross-fetch'
import { host, port, apiNotFound } from '../../../const'
import { UserItem } from '../../../types/Item'

const userItemRouter = Express.Router()

userItemRouter.get('/useritem/:type/:username', async (req, res) => {
    const options = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${req.cookies.authToken}`,
            'Content-Type': 'application/json'
        }
    }
    const responseUseritem = await fetch(`http://${host}:${port}/api/useritem/useritem${req.params.type}/${req.params.username}`, options)
    if (responseUseritem.status.toString()[0] === '5') {
        return res.status(responseUseritem.status).send({ message: responseUseritem.statusText })
    }

    const jsonUserItem = await responseUseritem.json()

    const responseNotUseritem = await fetch(`http://${host}:${port}/api/useritem/notuseritem${req.params.type}/${req.params.username}`, options)
    if (responseNotUseritem.status.toString()[0] === '5') {
        return res.status(responseNotUseritem.status).send({ message: responseNotUseritem.statusText })
    }

    const jsonNotUserItem = await responseNotUseritem.json()

    const userItem: UserItem = {
        item: jsonUserItem,
        notItem: jsonNotUserItem
    }
    
    if (responseUseritem.status !== 200) {
        return jsonUserItem.message
    }
    return res.status(200).json(userItem)
})

userItemRouter.post('/adduseritem/:type', async (req, res) => {
    const options = {
        method: 'POST',
        body: JSON.stringify(req.body),
        headers: {
            'Authorization': `Bearer ${req.cookies.authToken}`,
            'Content-Type': 'application/json'
        }
    }
    const response = await fetch(`http://${host}:${port}/api/useritem/adduseritem${req.params.type}`, options)
    if (response.status.toString()[0] === '5') {
        return res.status(response.status).send({ message: response.statusText })
    }

    const json = await response.json()
    
    if (response.status !== 200) {
        return res.status(404).send({message: json.message})
    }
    res.status(200).json(json)
})

userItemRouter.post('/removeuseritem/:type', async (req, res) => {
    const options = {
        method: 'POST',
        body: JSON.stringify(req.body),
        headers: {
            'Authorization': `Bearer ${req.cookies.authToken}`,
            'Content-Type': 'application/json'
        }
    }
    const response = await fetch(`http://${host}:${port}/api/useritem/removeuseritem${req.params.type}`, options)
    if (response.status.toString()[0] === '5') {
        return res.status(response.status).send({ message: response.statusText })
    }

    const json = await response.json()

    if (response.status !== 200) {
        return res.status(404).send({message: json.message})
    }
    res.status(200).json(json)
})

export default userItemRouter
