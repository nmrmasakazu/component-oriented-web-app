import axios, { AxiosRequestConfig } from 'axios'
import { catchAxiosError } from './error'


const baseConfig: AxiosRequestConfig = {
    baseURL: 'http://localhost:3000',
}

export const post = async (url: string, data: any) => {
    return await axios.post(url, data, baseConfig).then(response => { 
        // return response
        if (response.error) {
            return res.error
        } else if (!res.data) {
            return 'ERROR'
        }
    })
}

export const remove = async (url: string) => {
    return await axios.delete(url, baseConfig).catch(catchAxiosError)
}

export const get = async (url: string, config: AxiosRequestConfig = {}) => {
    const axiosConfig = {
        ...baseConfig,
        ...config,
    }
    return await axios.get(url, axiosConfig).catch(catchAxiosError)
}
