import NextAuth, { AuthOptions } from 'next-auth'
import OktaProvider from 'next-auth/providers/okta'
import callbacks from '../../../auth/callbacks'

const {
  OKTA_CLIENT_ID: clientId = '',
  OKTA_CLIENT_SECRET: clientSecret = '',
  OKTA_ISSUER: issuer = '',
  NEXTAUTH_SECRET: nextAuthSecret = '',
} = process.env

const authOptions: AuthOptions = {
  providers: [
    OktaProvider({
      clientId,
      clientSecret,
      issuer,
    }),
  ],
  callbacks,
  secret: nextAuthSecret,
}

export default NextAuth(authOptions)
