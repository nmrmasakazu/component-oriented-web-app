import Cookie from 'js-cookie'
import Router from 'next/router'
import { LoginInputs } from '../../types/LoginInputs'
import { catchAxiosError } from './error'
import { post } from './rest'

export const COOKIES = {
    authToken: 'app.authToken'
}

export async function login(inputs: LoginInputs): Promise<string | void> {
    const data = new URLSearchParams()
    const res: any = await post(`/api/login?username=${inputs.username}&password=${inputs.password}`, data).catch(catchAxiosError)

    if (res.error) {
        return res.error
    } else if (!res.data || !res.data.token) {
        return 'Something went wrong!'
    }

    const { token } = res.data
    Cookie.set(COOKIES.authToken, token)
    await Router.push('/secret')

}
