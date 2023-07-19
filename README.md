This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

To run node application and database, run

```bash
cp .env.example .env.local # Copy the example env to a local .env file. Adjust variables, if needed

docker-compose up -d # Create docker-compose services

sudo chmod -R 777 docker/volumes/dynamodb # Give write permissions to dynamodb docker volume

nvm use
npm i
npm run dev
```

Open [localhost:3000](http://localhost:3000) with your browser to see the frontend app.

Open [localhost:8080](http://localhost:8080) to enter the DynamoDB Admin UI

## Database seeding

To seed the database, run the following command in `app` container

```bash
docker-compose run --rm app npm run db:seed
```

## Okta Authentication for local environment

First create a `.env.local` file in the root directory itself and fill the valid okta app credentials.

```sh
OKTA_CLIENT_ID=xxxxx
OKTA_CLIENT_SECRET=xxxxx
OKTA_ISSUER=https://dev-78895059.okta.com/oauth2/default
```

## Testing

This project uses `Jest` for testing. To run tests, use the following command

```bash
npm run test # Single run
npm run test:watch # Run in watch mode - tests will automatically run once code is updated
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
