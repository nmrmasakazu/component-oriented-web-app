// Express徹底入門 https://gist.github.com/mitsuruog/fc48397a8e80f051a145
import Express from 'express'
import next from 'next'
import apiRouter from './routes/api/index'

const dev = process.env.NODE_ENV !== 'production'

const port = process.env.PORT || 3000

async function main() {
    const app = Express()
    const nextApp = next({ dev, dir: './src/client' })
    const handle = nextApp.getRequestHandler()
    await nextApp.prepare()

    app.use('/api', apiRouter)
    // Next.jsをミドルウェアにする
    app.use((req, res) => {
        handle(req, res)
    })

    app.listen(port, () => {
        console.log(`Running on http://localhost:${port}`)
    })
}

main()
