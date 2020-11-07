import React from 'react'
import { NextContext } from 'next'
import fetch from 'cross-fetch'

type Props = {
    token: string
}

class App extends React.Component<Props> {
    static async getInitialProps(ctx: NextContext): Promise<Props> {

        const response = await fetch('http://localhost:3000/api/auth')
        const json = await response.json()

        return { token: json.token }
    }

    render() {
        return (
            <>
                <div>
                    token is <br/> {this.props.token}
                </div>
            </>
        )
    }
}

export default App
