#!/usr/bin/env tsx
import seeders from './database/seeders'
import initializeDatabase from './database/initializeDatabase'

const seed = async () => {
  initializeDatabase()

  for (const seeder of seeders) {
    console.info(`Running ${seeder.name}...`)

    const { unprocessedItems } = await seeder()

    console.info(
      `${seeder.name} seeded successfully. Unprocessed items: ${unprocessedItems}`
    )
  }
}

seed().then(() => console.info('Database seeded successfully!'))
