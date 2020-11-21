// Appコンポーネントを使ってページを初期化
// すべてのページコンポーネントで共通する処理を実行
import React from 'react'
import { Provider } from 'react-redux'
import App, { Container } from 'next/app'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'

export default class MyApp extends App {
    static async getInitialProps({ Component, router, ctx }: { Component: any, router: any, ctx: any }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }

    render() {
        const { Component, pageProps } = this.props

        return (
            <Container>
                <Component {...pageProps} />
            </Container>
        )
    }
}

