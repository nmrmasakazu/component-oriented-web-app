import { catchAxiosError } from '../error'
import { get, post, remove } from '../rest'

export async function itemch(): Promise<string | void> {
    const res: any = await get('/api/itemch').catch(catchAxiosError)

    if (res.error) {
        return res.error
    } else if (!res.data) {
        return 'ERROR'
    }
    return res.data
}

export async function addItemch(name: string): Promise<string | void> {

    const body = {
        item: name
    }

    const res: any = await post('/api/additemch', body).catch(catchAxiosError)

    if (res.error) {
        return res.error
    } else if (!res.data) {
        return 'ERROR'
    }
    return 'OK'
}

export async function removeItemch(id: number): Promise<string | void> {

    const res: any = await remove(`/api/removeitemch/${id}`).catch(catchAxiosError)

    if (res.error) {
        return res.error
    } else if (!res.data) {
        return 'ERROR'
    }
    return 'OK'
}
