import type { UserModel } from '../documents/User'
import User from '../documents/User'

type UserRepository = {
  findByEmail: (email: UserModel['email']) => Promise<UserModel | null>
  updateOrCreate: (
    email: UserModel['email'],
    data: Partial<Omit<UserModel, 'email'>>,
    defaults?: Partial<Omit<UserModel, 'email'>>
  ) => Promise<UserModel>
}

const userRepository: UserRepository = {
  findByEmail: async (email) => {
    const user = await User.get(email)

    return user || null
  },
  updateOrCreate: async (email, data, defaults) => {
    const exisingUser = await userRepository.findByEmail(email)

    if (null === exisingUser) {
      return User.create({
        email,
        ...defaults,
        ...data,
      })
    }

    return User.update({ email }, data)
  },
}

export default userRepository
