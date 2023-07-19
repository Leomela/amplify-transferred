import { beforeEach, describe, expect, it, jest } from '@jest/globals'
import callbacks from '../callbacks'
import userRepository from '../../database/repositories/userRepository'
import { UserRole } from '../userRole'
import User from '../../database/documents/User'

describe('on auth callback', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('signIn', () => {
    const userRepositoryUpdateOrCreate = jest
      .spyOn(userRepository, 'updateOrCreate')
      .mockImplementation(
        async (email, data, defaults) =>
          new User({ email, ...defaults, ...data })
      )

    it('throws error when email or name is empty', () => {
      const user = {
        id: 'test',
      }

      expect(async () => {
        await callbacks.signIn({ user, account: null })
      }).rejects.toThrow('User must have name and email!')

      expect(userRepositoryUpdateOrCreate).not.toBeCalled()
    })

    it('puts user into database with default role', async () => {
      const user = {
        id: 'test',
        name: 'Test',
        email: 'test@example.com',
      }

      await callbacks.signIn({ user, account: null })

      expect(userRepositoryUpdateOrCreate).toBeCalledTimes(1)
      expect(userRepositoryUpdateOrCreate).toBeCalledWith(
        'test@example.com',
        {
          name: 'Test',
          providerId: 'test',
        },
        {
          role: UserRole.DEFAULT,
        }
      )
    })
  })

  describe('session', () => {
    const userRepositoryFindByEmail = jest.spyOn(userRepository, 'findByEmail')

    const sessionArgs = {
      session: {
        user: {
          name: 'Test',
          email: 'test@example.com',
        },
        expires: new Date().toISOString(),
      },
      user: {
        id: 'test',
        name: 'Test',
        email: 'test@example.com',
      },
      token: {},
    }

    it('returns session with database user', async () => {
      userRepositoryFindByEmail.mockImplementationOnce(
        async (email) =>
          new User({
            email,
            name: 'Test',
            providerId: 'Test',
            role: UserRole.DEFAULT,
          })
      )

      const newSession = await callbacks.session(sessionArgs)

      expect(userRepositoryFindByEmail).toBeCalledTimes(1)
      expect(userRepositoryFindByEmail).toBeCalledWith('test@example.com')

      expect(newSession).toMatchObject({
        ...sessionArgs.session,
        user: {
          email: 'test@example.com',
          name: 'Test',
          providerId: 'Test',
          role: UserRole.DEFAULT,
        },
      })
    })

    it('Throws error when session user does not have email', async () => {
      await expect(async () => {
        await callbacks.session({
          ...sessionArgs,
          session: {
            ...sessionArgs.session,
            user: {
              ...sessionArgs.session.user,
              email: undefined,
            },
          },
        })
      }).rejects.toThrow('Invalid session user: email is empty')
    })

    it('Throws error when user does not exist in database', async () => {
      userRepositoryFindByEmail.mockImplementationOnce(async () => null)

      await expect(async () => {
        await callbacks.session(sessionArgs)
      }).rejects.toThrow('User does not exist')
    })
  })
})
