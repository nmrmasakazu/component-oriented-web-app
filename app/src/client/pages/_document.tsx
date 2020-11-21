// サーバサイドでのみ実行される共通処理
import * as React from 'react'
import Document from 'next/document'
import DefaultLayout from '../layouts/index'

export default class MyDocument extends Document {
    render() {
        return <DefaultLayout />
    }
}

MyDocument.getInitialProps = async ctx => {

    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }

}
