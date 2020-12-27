import Cookie from 'js-cookie'
import Router from 'next/router'
import { LoginInputs } from '../../../types/LoginInputs'
import { AuthToken } from "../../services/auth/authToken"
import axios, { AxiosError } from 'axios'
import { host, bffPort } from '../../../const'

export const COOKIES = {
    authToken: 'authToken'
}

export async function login(inputs: LoginInputs): Promise<string | void> {
    try {
        const response = await axios.post(`http://${host}:${bffPort}/api/login?username=${inputs.username}&password=${inputs.password}`)

        Cookie.set(COOKIES.authToken, response.data.token)
        const auth = new AuthToken(response.data.token)

        if (auth.decodedToken.auth.map(obj => obj.authority == "ROLE_ADMIN").indexOf(true) >= 0) {
            Router.push('/admin')
        } else {
            Router.push('/user')
        }
        
    } catch (error) {
        const e: AxiosError = error
        return e.response.data.message
    }
}
