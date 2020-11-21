import { Signup } from '../../../types/Signup'
import { catchAxiosError } from '../error'
import { post } from '../rest'

export const COOKIES = {
    authToken: 'app.authToken'
}

export async function signup(body: Signup): Promise<string | void> {

    const res: any = await post('/api/signup', body).catch(catchAxiosError)

    if (res.error) {
        return res.error
    } else if (!res.data) {
        return 'ERROR'
    }

    return 'OK'

}
