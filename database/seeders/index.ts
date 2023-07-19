import roles from './roles'

export type Seeder = () => Promise<{ unprocessedItems: number }>

/**
 * Add new seeders here...
 */
const seeders = [roles]

export default seeders
