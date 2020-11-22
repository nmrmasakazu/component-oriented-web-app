import { catchAxiosError } from '../error'
import { get } from '../rest'

export async function itemch(): Promise<string | void> {
    const res: any = await get('/api/itemch').catch(catchAxiosError)

    if (res.error) {
        return res.error
    } else if (!res.data) {
        return 'ERROR'
    }
    return res.data
}
