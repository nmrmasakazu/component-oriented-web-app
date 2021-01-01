import React from 'react'
import { AuthProps, privateRoute } from '../components/privateRoute'
import Cookie from 'js-cookie'
import Router from 'next/router'
import { COOKIES } from '../services/auth/login'
import { Links } from '../components/links'

type Props = AuthProps & {
    message: string
}

/**
 * 認証された場合のみ
 */
function Page(props: Props) {

    const logout = async () => {
        Cookie.remove(COOKIES.authToken)
        alert("logout")
        await Router.push("/login")
    }

    return <>
        <Links />
        <div>Welcome to {props.auth.decodedToken.sub} san</div>
        <button onClick={logout}>Logout</button>
    </>
}

export default privateRoute(Page)
