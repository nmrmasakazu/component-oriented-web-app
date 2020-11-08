import ServerCookie from "next-cookies";
import React, { Component } from "react"
import { COOKIES } from "../services/login"
import { AuthToken } from "../services/authToken"

export type AuthProps = {
    auth: AuthToken
}

/**
 * 認証を確認する親コンポーネント
 */
export function privateRoute(WrappedComponent: any) {
    return class extends Component<AuthProps> {
        static async getInitialProps(ctx: any) {
            const token = ServerCookie(ctx)[COOKIES.authToken]
            const auth = new AuthToken(token)
            const initialProps = { auth }
            if (auth.isExpired) {
                ctx.res.writeHead(302, {
                    Location: "/login?redirected=true",
                })
                ctx.res.end()
            }
            if (WrappedComponent.getInitialProps) return WrappedComponent.getInitialProps(initialProps)
            return initialProps
        }

        render() {
            return <WrappedComponent {...this.props} />
        }
    }
}
