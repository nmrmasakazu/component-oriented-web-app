import { Signup } from '../../../types/Signup'
import { ResponseResult } from '../../../types/ResponseResult'
import axios, { AxiosError } from 'axios'
import { host, bffPort } from '../../../const'

export const COOKIES = {
    authToken: 'app.authToken'
}

export async function signup(body: Signup): Promise<ResponseResult> {

    try {
        axios.post(`http://${host}:${bffPort}/api/signup`, body)
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
