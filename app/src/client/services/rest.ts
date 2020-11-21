import axios, { AxiosRequestConfig } from 'axios'
import { catchAxiosError } from './error'


const baseConfig: AxiosRequestConfig = {
    baseURL: 'http://localhost:3000',
}

export const post = (url: string, data: any) => {
    console.log(data)
    return axios.post(url, data, baseConfig).catch(catchAxiosError)
}

export const get = async (url: string, config: AxiosRequestConfig = {}) => {
    const axiosConfig = {
        ...baseConfig,
        ...config,
    }
    return await axios.get(url, axiosConfig).catch(catchAxiosError)
}
