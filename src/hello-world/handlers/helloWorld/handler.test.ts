import { APIGatewayProxyEvent } from 'aws-lambda';
import { handle } from './handler';

it('should return a 200', async () => {
  
  const request: APIGatewayProxyEvent = {
    httpMethod: 'GET',
  } as any;

  const response = await handle(request);

  expect(response.statusCode).toBe(200);
});
