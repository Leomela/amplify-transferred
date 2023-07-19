import * as dynamoose from 'dynamoose'

const isDatabaseLocal = 'true' === process.env.AWS_DYNAMODB_LOCAL

const initializeDatabase = () => {
  if (!isDatabaseLocal) {
    const ddb = new dynamoose.aws.ddb.DynamoDB({
      region: process.env.AWS_REGION,
    })

    dynamoose.aws.ddb.set(ddb)
  } else {
    dynamoose.aws.ddb.local(process.env.AWS_DYNAMODB_LOCAL_ENDPOINT)
  }
}

export default initializeDatabase
