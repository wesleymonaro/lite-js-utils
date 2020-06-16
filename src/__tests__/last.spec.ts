import { last } from '..';

describe('last', () => {
  it('should be able to get last element from array', async () => {
    const response = last([0, 1, 2]);

    expect(response).toEqual(2);
  });

  it('should be return undefined if is a empty or not array', async () => {
    const response = last([]);

    expect(response).toEqual(undefined);
  });
});
