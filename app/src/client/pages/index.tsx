import React from 'react'
import Head from 'next/head'
import { NextContext } from 'next'
import fetch from 'cross-fetch'

type Props = {
    name: string
}

class App extends React.Component<Props> {
    static async getInitialProps(ctx: NextContext): Promise<Props> {

        let name = ''
        await fetch('http://localhost:3000/api/getName')
                .then(res => res.json())
                .then(json => name = json.name)

        return { name: `Hello ${name}` }
    }

    render() {
        return (
            <>
                <Head>
                    <title>{this.props.name}</title>
                </Head>
                <div>
                    {this.props.name}
                </div>
            </>
        )
    }
}

export default App
