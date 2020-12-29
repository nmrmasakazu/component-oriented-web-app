import Express from 'express'
import fetch from 'cross-fetch'
import { host, port, apiNotFound } from '../../../const'

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
        return json.message
    }
    return res.status(200).json(json)
})

promiseTableRouter.get('/promisedetail/:id', async (req, res) => {
    const options = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${req.cookies.authToken}`,
            'Content-Type': 'application/json'
        }
    }
    const response = await fetch(`http://${host}:${port}/api/promise/promisedetail/${req.params.id}`, options)
    if (response.status.toString()[0] === '5') {
        return res.status(response.status).send({ message: response.statusText })
    }

    const json = await response.json()
    
    if (response.status !== 200) {
        return json.message
    }
    return res.status(200).json(json)
})

// userItemRouter.post('/adduseritem/:type', async (req, res) => {
//     const options = {
//         method: 'POST',
//         body: JSON.stringify(req.body),
//         headers: {
//             'Authorization': `Bearer ${req.cookies.authToken}`,
//             'Content-Type': 'application/json'
//         }
//     }
//     const response = await fetch(`http://${host}:${port}/api/useritem/adduseritem${req.params.type}`, options)
//     .catch( _ => {
//         return res.status(404).send({message: apiNotFound})
//     })
//     const json = await response.json()
    
//     if (response.status !== 200) {
//         return res.status(404).send({message: json.message})
//     }
//     res.status(200).json(json)
// })

// userItemRouter.post('/removeuseritem/:type', async (req, res) => {
//     const options = {
//         method: 'POST',
//         body: JSON.stringify(req.body),
//         headers: {
//             'Authorization': `Bearer ${req.cookies.authToken}`,
//             'Content-Type': 'application/json'
//         }
//     }
//     const response = await fetch(`http://${host}:${port}/api/useritem/removeuseritem${req.params.type}`, options)
//     .catch( _ => {
//         return res.status(404).send({message: apiNotFound})
//     })
//     const json = await response.json()

//     if (response.status !== 200) {
//         return res.status(404).send({message: json.message})
//     }
//     res.status(200).json(json)
// })

export default promiseTableRouter
