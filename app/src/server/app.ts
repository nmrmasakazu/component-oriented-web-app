import Express from 'express'
import next from 'next'
import authRouter from './routes/api/auth'
import itemRouter from './routes/api/item'
import userItemRouter from './routes/api/userItem'
import promiseTableRouter from './routes/api/promisetable'
import storageRouter from './routes/api/storage'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import { host } from '../const'

const dev = process.env.NODE_ENV !== 'production'

async function main() {
    const app = Express()
    const nextApp = next({ dev, dir: './src/client' })
    const handle = nextApp.getRequestHandler()
    await nextApp.prepare()

    app.use(cookieParser())
    app.use(bodyParser.urlencoded({extended: true}))

    app.use('/bff', authRouter)
    app.use('/bff', itemRouter)
    app.use('/bff', userItemRouter)
    app.use('/bff', promiseTableRouter)
    app.use('/bff', storageRouter)

    // Next.jsをミドルウェアとして使う
    app.use((req, res) => {
        handle(req, res)
    })

    app.listen(3000, () => {
        console.log(`Running on http://${host}:3000`)
    })
}

main()
