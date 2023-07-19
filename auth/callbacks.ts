import { CallbacksOptions } from 'next-auth'
import initializeDatabase from '../database/initializeDatabase'
import userRepository from '../database/repositories/userRepository'
import { UserRole } from './userRole'

const callbacks: Pick<CallbacksOptions, 'signIn' | 'session'> = {
  signIn: async ({ user }) => {
    if (!user.email || !user.name) {
      throw Error('User must have name and email!')
    }

    initializeDatabase()

    await userRepository.updateOrCreate(
      user.email,
      {
        name: user.name,
        providerId: user.id,
      },
      {
        role: UserRole.DEFAULT,
      }
    )

    return true
  },
  session: async ({ session }) => {
    if (!session.user?.email) {
      throw Error('Invalid session user: email is empty')
    }

    initializeDatabase()

    const databaseUser = await userRepository.findByEmail(session.user.email)

    if (null === databaseUser) {
      throw new Error('User does not exist')
    }

    return {
      ...session,
      user: databaseUser,
    }
  },
}

export default callbacks
