import { APIGatewayProxyEvent } from 'aws-lambda';

export const handle = (event: APIGatewayProxyEvent) => {

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello World!',
    }),
  }
};
