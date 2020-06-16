import { lowerCase } from '..';

describe('lowerCase', () => {
  const response = lowerCase('STRING DE TESTE');

  expect(response).toEqual('string de teste');
});

it('should return empty string to invalid element', async () => {
  const response = lowerCase(null);

  expect(response).toEqual('');
});
