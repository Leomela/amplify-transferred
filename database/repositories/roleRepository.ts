import { UserRole } from '../../auth/userRole'
import Role, { RoleModel } from '../documents/Role'

type RoleRepository = {
  findByName: (name: UserRole) => Promise<RoleModel | null>
}

const roleRepository: RoleRepository = {
  findByName: async (name) => {
    return (await Role.get({ name })) || null
  },
}

export default roleRepository
