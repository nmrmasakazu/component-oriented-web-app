import Express from 'express'
import fetch from 'cross-fetch'

const itemRouter = Express.Router()

itemRouter.get('/itemch', async (req, res) => {

    const options = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${req.cookies.authToken}`,
            'Content-Type': 'application/json'
        }
    }

    console.log(options)

    const response = await fetch('http://localhost:81/item/itemch', options)
    
    if (response.status !== 200) {
        return res.status(404).send({message: 'ERROR'})
    }
    const json = await response.json()

    res.status(200).json(json)

})

export default itemRouter
