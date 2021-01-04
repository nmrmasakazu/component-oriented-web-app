import Express from 'express'
import fetch from 'cross-fetch'
import { host, port } from '../../../const'
import AWS from 'aws-sdk'

const storageRouter = Express.Router()

const s3Client = new AWS.S3({
    accessKeyId: `minio`,
    secretAccessKey: `minio123`,
    endpoint: `http://localhost/`,
    s3ForcePathStyle: true,
})

storageRouter.get('/getimgs/:filename', (req, res) => {
    const params = {
        Bucket: `public`,
        Key: `${req.params.filename}`,
        Expires: 300 // expire in 3000 seconds
    }

    s3Client.getSignedUrlPromise('getObject', params)
    .then(sharedUrl => {
        return res.status(200).send({url: sharedUrl})
    })
    .catch(err => {
        res.status(500).send({ error: err })
    })
})

storageRouter.get('/getprivate/:filename', (req, res) => {
    const params = {
        Bucket: `private`,
        Key: `${req.params.filename}`,
        Expires: 300 // expire in 3000 seconds
    }

    s3Client.getSignedUrlPromise('getObject', params)
    .then(sharedUrl => {
        return res.status(200).send({url: sharedUrl})
    })
    .catch(err => {
        res.status(500).send({ error: err })
    })
})

export default storageRouter
