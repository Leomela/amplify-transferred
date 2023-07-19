import { UserRole } from '../../auth/userRole'
import Role, { RoleModel } from '../documents/Role'
import { Permissions } from '../../auth/permissions'
import { Seeder } from './'

const roles: RoleModel[] = [
  {
    name: UserRole.DEFAULT,
    permissions: [Permissions.READ],
  },
  {
    name: UserRole.ENGINEER,
    permissions: [
      Permissions.READ,
      Permissions.EDIT_META,
      Permissions.EDIT_CHART,
      Permissions.EDIT_FORMAT,
      Permissions.ADMIN,
    ],
  },
  {
    name: UserRole.EDITOR,
    permissions: [Permissions.READ, Permissions.EDIT_META],
  },
  {
    name: UserRole.PRODUCER,
    permissions: [
      Permissions.READ,
      Permissions.EDIT_META,
      Permissions.EDIT_CHART,
    ],
  },
  {
    name: UserRole.REVIEWER,
    permissions: [
      Permissions.READ,
      Permissions.EDIT_META,
      Permissions.EDIT_CHART,
      Permissions.EDIT_FORMAT,
      Permissions.ADMIN,
    ],
  },
]

const rolesSeeder: Seeder = async () => {
  const result = await Role.batchPut(roles)

  return {
    unprocessedItems: result.unprocessedItems.length,
  }
}

export default rolesSeeder
