import Cookie from 'js-cookie'
import Router from 'next/router'
import { LoginInputs } from '../../../types/LoginInputs'
import { catchAxiosError } from '../error'
import { post } from '../rest'
import { AuthToken } from "../../services/auth/authToken"

export const COOKIES = {
    authToken: 'authToken'
}

export async function login(inputs: LoginInputs): Promise<string | void> {
    const data = new URLSearchParams()
    const res: any = await post(`/api/login?username=${inputs.username}&password=${inputs.password}`, data).catch(catchAxiosError)

    if (res.error) {
        return res.error
    } else if (!res.data || !res.data.token) {
        return 'ERROR'
    }

    const { token } = res.data
    Cookie.set(COOKIES.authToken, token)

    const auth = new AuthToken(token)

    if (auth.decodedToken.auth.map(obj => obj.authority == "ROLE_ADMIN").indexOf(true) >= 0) {
        await Router.push('/admin')
    } else {
        await Router.push('/user')
    }
}
