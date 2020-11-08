import Express from 'express'
import next from 'next'
import apiRouter from './routes/api/index'
import authRouter from './routes/api/auth'

const dev = process.env.NODE_ENV !== 'production'

const port = process.env.PORT || 3000

async function main() {
    const app = Express()
    const nextApp = next({ dev, dir: './src/client' })
    const handle = nextApp.getRequestHandler()
    await nextApp.prepare()

    app.use('/api', authRouter)
    app.use('/api', apiRouter)

    // Next.jsをミドルウェアとして使う
    app.use((req, res) => {
        handle(req, res)
    })

    app.listen(port, () => {
        console.log(`Running on http://localhost`)
    })
}

main()
