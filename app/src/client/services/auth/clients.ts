import axios, { AxiosError } from 'axios'
import { ResponseResult } from '../../../types/ResponseResult'
import { host, bffPort } from '../../../const'

export async function getClients(): Promise<ResponseResult> {
    try {
        const response = await axios.get(`http://${host}:${bffPort}/api/clients`)
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
