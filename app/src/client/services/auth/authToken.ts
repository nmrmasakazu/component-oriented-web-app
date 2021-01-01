import jwtDecode from 'jwt-decode'

export type DecodedToken = {
  readonly sub: string
  readonly exp: number
  readonly auth: {
    authority: string
  }[]
}

export class AuthToken {

  readonly decodedToken: DecodedToken

  constructor(readonly token?: string) {
    this.decodedToken = { sub: '', exp: 0, auth: [] }
    try {
      if (token) this.decodedToken = jwtDecode(token)
    } catch (e) {}
  }

  get expiresAt(): Date {
    return new Date(this.decodedToken.exp * 1000)
  }

  get isExpired(): boolean {
    return new Date() > this.expiresAt
  }

  get isAuthenticated(): boolean {
    return !this.isExpired
  }

  get authorizationString() {
    return `Bearer ${this.token}`
  }
}
