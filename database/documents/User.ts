import * as dynamoose from 'dynamoose'

import { Item } from 'dynamoose/dist/Item'
import { UserRole } from '../../auth/userRole'

export type UserModel = {
  email: string
  name: string
  role: UserRole
  providerId: string
}

export interface UserItem extends Item, UserModel {}

const userSchema = new dynamoose.Schema(
  {
    email: {
      type: String,
      required: true,
      hashKey: true,
    },
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: Object.values(UserRole),
      required: true,
    },
    providerId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const User = dynamoose.model<UserItem>('Users', userSchema)

export default User
