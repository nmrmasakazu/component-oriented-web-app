import Express from 'express'
import next from 'next'
import authRouter from './routes/api/auth'
import itemRouter from './routes/api/item'
import userItemRouter from './routes/api/useritem'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'

const dev = process.env.NODE_ENV !== 'production'

const port = process.env.PORT || 3000

async function main() {
    const app = Express()
    const nextApp = next({ dev, dir: './src/client' })
    const handle = nextApp.getRequestHandler()
    await nextApp.prepare()

    app.use(cookieParser())
    app.use(bodyParser())

    app.use('/bff', authRouter)
    app.use('/bff', itemRouter)
    app.use('/bff', userItemRouter)

    // Next.jsをミドルウェアとして使う
    app.use((req, res) => {
        handle(req, res)
    })

    app.listen(port, () => {
        console.log(`Running on http://localhost`)
    })
}

main()
