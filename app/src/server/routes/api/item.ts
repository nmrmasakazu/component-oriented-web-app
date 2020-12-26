import Express from 'express'
import fetch from 'cross-fetch'

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
    const response = await fetch('http://localhost:8080/item/itemch', options)
    
    if (response.status !== 200) {
        return response
    }
    const json = await response.json()

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

    const response = await fetch('http://localhost:8080/item/additemch', options)
    
    if (response.status !== 200) {
        return res.status(404).send({message: 'ERROR'})
    }

    res.status(200).json({message: ''})

})

itemRouter.delete('/removeitemch/:id', async (req, res) => {

    const options = {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${req.cookies.authToken}`,
            'Content-Type': 'application/json'
        }
    }

    const response = await fetch(`http://localhost:8080/item/removeitemch/${req.params.id}`, options)
    
    if (response.status !== 200) {
        return res.status(404).send({message: 'ERROR'})
    }

    res.status(200).json({message: ''})

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
    const response = await fetch('http://localhost:8080/item/itemtr', options)
    
    if (response.status !== 200) {
        return res.status(404).send({message: 'ERROR'})
    }
    const json = await response.json()

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

    const response = await fetch('http://localhost:8080/item/additemtr', options)
    
    if (response.status !== 200) {
        return res.status(404).send({message: 'ERROR'})
    }

    res.status(200).json({message: ''})

})

itemRouter.delete('/removeitemtr/:id', async (req, res) => {

    const options = {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${req.cookies.authToken}`,
            'Content-Type': 'application/json'
        }
    }

    const response = await fetch(`http://localhost:8080/item/removeitemtr/${req.params.id}`, options)
    
    if (response.status !== 200) {
        return res.status(404).send({message: 'ERROR'})
    }

    res.status(200).json({message: ''})

})

export default itemRouter
