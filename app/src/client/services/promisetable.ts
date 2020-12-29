import axios, { AxiosError } from 'axios'
import { ResponseResult } from '../../types/ResponseResult'
import { host, bffPort } from '../../const'

export async function getPromises(name: string): Promise<ResponseResult> {
    try {
        const response = await axios.get(`http://${host}:${bffPort}/bff/promisetable/${name}`)
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

export async function getPromiseDetail(id: number): Promise<ResponseResult> {
    try {
        const response = await axios.get(`http://${host}:${bffPort}/bff/promisedetail/${id}`)
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
