// サーバサイドでのみ実行される共通処理
import * as React from 'react'
import Document, { NextDocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import DefaultLayout from '../layouts/index'

export default class extends Document {
    // ctxにはサーバサイドのみで受け取ることができるreq/resが含まれている．
    static async getInitialProps(ctx: NextDocumentContext) {
        // SSRに対応したstyled-componentsの導入
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage
        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App: any) => (props: any) =>
                    sheet.collectStyles(<App {...props}/>)
            })
        
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }
    render() {
        return <DefaultLayout />
    }
}
