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
        Bucket: `imgs`,
        Key: `${req.params.filename}`,
        Expires: 10 // expire in 10 seconds
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
