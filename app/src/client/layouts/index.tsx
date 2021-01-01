import * as React from 'react'
import { Head, Main, NextScript } from 'next/document'

export default () => (
  <html>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="/static/bootstrap/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/static/css/Contact-Form-Clean.css" />
      <link rel="stylesheet" href="/static/css/styles-index.css" />
      <link rel="stylesheet" href="/static/css/styles-promisedetail.css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" />
    </Head>
    <body>
      <Main />
      <NextScript />
      {/* <style>{`body {background-color: rgb(0, 157, 158)}`}</style> */}
    </body>
  </html>
)
