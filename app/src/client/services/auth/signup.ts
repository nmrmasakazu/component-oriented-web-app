import { User } from '../../../types/User'
import { ResponseResult } from '../../../types/ResponseResult'
import axios, { AxiosError } from 'axios'
import { host, bffPort } from '../../../const'

export const COOKIES = {
    authToken: 'app.authToken'
}

export async function signup(body: User): Promise<ResponseResult> {

    try {
        axios.post(`http://${host}:${bffPort}/bff/signup`, body)
        const responseResult: ResponseResult = {
            success: true,
            message: ''
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
