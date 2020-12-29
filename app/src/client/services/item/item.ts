import axios, { AxiosError } from 'axios'
import { ResponseResult } from '../../../types/ResponseResult'
import { host, bffPort } from '../../../const'

export async function getItem(type: 'tr' | 'ch'): Promise<ResponseResult> {
    try {
        const response = await axios.get(`http://${host}:${bffPort}/bff/item${type}`)
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

export async function addItem(type: 'tr' | 'ch', name: string): Promise<ResponseResult> {
    try {
        const response = await axios.post(`http://${host}:${bffPort}/bff/additem${type}`, { item: name })
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

export async function removeItem(type: 'tr' | 'ch', id: number): Promise<ResponseResult> {
    try {
        const response = await axios.delete(`http://${host}:${bffPort}/bff/removeitem${type}/${id}`)
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
