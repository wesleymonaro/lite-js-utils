import { validateCPF } from '..';

describe('validateCPF', () => {
  it('should be able to validate a valid CPF without special characters', async () => {
    const response = validateCPF('55868901002');

    expect(response).toEqual(true);
  });

  it('should be able to validate a valid CPF with special characters', async () => {
    const response = validateCPF('558.689.010-02');

    expect(response).toEqual(true);
  });

  it('should be able to invalidate a invalid CPF', async () => {
    const response = validateCPF('11111111111');

    expect(response).toEqual(false);
  });

  it('should be able to invalidate a CPF with invalid digit', async () => {
    const response = validateCPF('55868901001');

    expect(response).toEqual(false);
  });
});
