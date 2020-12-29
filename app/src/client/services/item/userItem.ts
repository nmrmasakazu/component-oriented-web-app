import axios, { AxiosError } from 'axios'
import { ResponseResult } from '../../../types/ResponseResult'
import { host, bffPort } from '../../../const'
import { Item } from '../../../types/Item'
// import Cookies from 'js-cookie'
// import { COOKIES } from "../auth/login"
// import { AuthToken } from "../auth/authToken"
// const token = Cookies.get(COOKIES.authToken)
// const auth = new AuthToken(token)

export async function getUserItem(type: 'tr' | 'ch', username: String): Promise<ResponseResult> {

    try {
        const response = await axios.get(`http://${host}:${bffPort}/bff/useritem/${type}/${username}`)
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

export async function addUserItem(type: 'tr' | 'ch', item: Item): Promise<ResponseResult> {
    try {
        const response = await axios.post(`http://${host}:${bffPort}/bff/adduseritem/${type}`, item)
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

export async function removeUserItem(type: 'tr' | 'ch', item: Item): Promise<ResponseResult> {
    try {
        const response = await axios.post(`http://${host}:${bffPort}/bff/removeuseritem/${type}`, item)
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
