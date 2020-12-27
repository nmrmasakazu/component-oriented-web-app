import { catchAxiosError } from '../error'
import { get, post, remove } from '../rest'

export async function itemtr(): Promise<string | void> {
    const res: any = await get('/api/itemtr').catch(catchAxiosError)

    if (res.error) {
        return res.error
    }
    return res.json()
}

export async function addItemtr(name: string): Promise<string | void> {

    const body = {
        item: name
    }

    const res: any = await post('/api/additemtr', body).catch(catchAxiosError)

    if (res.error) {
        return res.error
    }
    return res.json()
}

export async function removeItemtr(id: number): Promise<string | void> {

    const res: any = await remove(`/api/removeitemtr/${id}`).catch(catchAxiosError)

    if (res.error) {
        return res.error
    }
    return res.json()
}
