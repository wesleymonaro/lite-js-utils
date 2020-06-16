import { validateCNPJ } from '..';

describe('validateCNPJ', () => {
  it('should be able to validate a valid CNPJ', async () => {
    const response = validateCNPJ('33772511000180');

    expect(response).toEqual(true);
  });

  it('should be able to invalidate a invalid CNPJ', async () => {
    const response = validateCNPJ('11111111111111');

    expect(response).toEqual(false);
  });

  it('should be able to invalidate a CNPJ with invalid digit', async () => {
    const response = validateCNPJ('33772511000170');

    expect(response).toEqual(false);
  });
});
