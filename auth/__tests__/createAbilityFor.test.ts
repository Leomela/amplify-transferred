import { describe, expect, it, jest } from '@jest/globals'
import User from '../../database/documents/User'
import { UserRole } from '../userRole'
import roleRepository from '../../database/repositories/roleRepository'
import Role from '../../database/documents/Role'
import { Permissions } from '../permissions'
import createAbilityFor from '../createAbilityFor'
import { defineAbility } from '@casl/ability'

describe('createAbilityFor', () => {
  describe('creates proper ability ', () => {
    const dataSet = [
      {
        name: 'Default',
        userModel: {
          id: 'test',
          name: 'Test',
          email: 'test',
          role: UserRole.DEFAULT,
        },
        permissions: [Permissions.READ],
        expectedAbility: defineAbility((can) => {
          can('read', 'all')
        }),
      },
      {
        name: 'Editor',
        userModel: {
          id: 'test',
          name: 'Test',
          email: 'test',
          role: UserRole.EDITOR,
        },
        permissions: [Permissions.READ, Permissions.EDIT_META],
        expectedAbility: defineAbility((can) => {
          can('read', 'all')
          can('edit-meta', 'all')
        }),
      },
      {
        name: 'Producer',
        userModel: {
          id: 'test',
          name: 'Test',
          email: 'test',
          role: UserRole.PRODUCER,
        },
        permissions: [
          Permissions.READ,
          Permissions.EDIT_META,
          Permissions.EDIT_CHART,
        ],
        expectedAbility: defineAbility((can) => {
          can('read', 'all')
          can('edit-meta', 'all')
          can('edit-chart', 'all')
        }),
      },
    ]

    it.each(dataSet)(
      'for $name role',
      async ({ userModel, permissions, expectedAbility }) => {
        const user = new User(userModel)

        const role = new Role({
          permissions,
        })

        jest.spyOn(roleRepository, 'findByName').mockResolvedValue(role)

        const ability = await createAbilityFor(user)

        expect(ability).toMatchObject(expectedAbility)
      }
    )
  })
})
