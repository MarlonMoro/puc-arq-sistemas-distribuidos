import { DynamoDBClient, QueryCommand, BatchGetItemCommand }  from '@aws-sdk/client-dynamodb';

const database = new DynamoDBClient({ region: 'us-east-1' })

export { database, QueryCommand, BatchGetItemCommand }