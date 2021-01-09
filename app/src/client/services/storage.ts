import axios, { AxiosError } from 'axios'
import { ResponseResult } from '../../types/ResponseResult'
import { host, port } from '../../const'

export async function getImgs(filename: string): Promise<ResponseResult> {
    try {
        const response = await axios.get(`http://${host}:${port}/bff/getimgs/${filename}`)
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

export async function getPrivate(filename: string): Promise<ResponseResult> {
    try {
        const response = await axios.get(`http://${host}:${port}/bff/getprivate/${filename}`)
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
