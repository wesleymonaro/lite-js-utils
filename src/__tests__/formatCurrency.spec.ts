import { formatCurrency } from '..';

describe('formatCurrency', () => {
  it('should be able to format a valid value without params', async () => {
    const response = formatCurrency(10.5);

    expect(response).toEqual('R$10,50');
  });

  it('should be able to format a valid value with params', async () => {
    const response = formatCurrency(10.5, true, '$');

    expect(response).toEqual('$10,50');
  });

  it('should be able to format a valid value with params', async () => {
    const response = formatCurrency(1000.5, true, 'R$', '.', ',', 3);

    expect(response).toEqual('R$1.000,500');
  });
});
