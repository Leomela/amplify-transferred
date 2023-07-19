import * as dynamoose from 'dynamoose'
import { Item } from 'dynamoose/dist/Item'
import { UserRole } from '../../auth/userRole'
import { Permissions } from '../../auth/permissions'

export type RoleModel = {
  name: UserRole
  permissions: Permissions[]
}

export interface RoleItem extends Item, RoleModel {}

const roleSchema = new dynamoose.Schema({
  name: String,
  permissions: {
    type: Array,
    schema: [String],
  },
})

const Role = dynamoose.model<RoleItem>('Roles', roleSchema)

export default Role
