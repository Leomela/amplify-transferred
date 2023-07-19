import { AbilityBuilder, createMongoAbility } from '@casl/ability'
import type { UserModel } from '../database/documents/User'
import roleRepository from '../database/repositories/roleRepository'

const createAbilityFor = async (user: UserModel) => {
  const { can, build } = new AbilityBuilder(createMongoAbility)

  const role = await roleRepository.findByName(user.role)

  if (null !== role) {
    role.permissions.forEach((permission) => can(permission, 'all'))
  }

  return build()
}

export default createAbilityFor
