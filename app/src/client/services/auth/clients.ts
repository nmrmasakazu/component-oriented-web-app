import axios, { AxiosError } from 'axios'
import { ResponseResult } from '../../../types/ResponseResult'
import { host, port } from '../../../const'
import Cookies from 'js-cookie'
import { COOKIES } from "../auth/login"
import { AuthToken } from "../auth/authToken"

export async function getClients(): Promise<ResponseResult> {
    try {
        const response = await axios.get(`http://${host}:${port}/bff/clients`)
        const responseResult: ResponseResult = {
            success: true,
            data: response.data
        }
        return responseResult
    } catch (error) {
        const e: AxiosError = error
        const responseResult: ResponseResult = {
            success: false,
            message: e.response.data.message
        }
        return responseResult
    }
}

export function whoami(): string {
    const token = Cookies.get(COOKIES.authToken)
    const auth = new AuthToken(token)
    return auth.decodedToken.sub
}
