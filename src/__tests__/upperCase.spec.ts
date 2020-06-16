import { upperCase } from '..';

describe('upperCase', () => {
  it('should be able to upperCase a string', async () => {
    const response = upperCase('string de teste');

    expect(response).toEqual('STRING DE TESTE');
  });

  it('should return empty string to invalid element', async () => {
    const response = upperCase(null);

    expect(response).toEqual('');
  });
});
