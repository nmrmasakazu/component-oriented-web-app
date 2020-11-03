// モジュールの型拡張
import { DefaultQuery } from 'next-server/router'
import { NextContext } from 'next'
import { AppProps } from 'next/app'
import { ReduxStore } from '../store'

declare module "next" {
  interface NextContext<Q extends DefaultQuery = DefaultQuery> {
    store: ReduxStore
  }
}
declare module "next/app" {
  interface AppProps<Q extends DefaultQuery = DefaultQuery> {
    store: ReduxStore
  }
}
