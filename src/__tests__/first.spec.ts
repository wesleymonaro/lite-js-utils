import { first } from '..';

describe('first', () => {
  it('should be able to get first element from array', async () => {
    const response = first([0, 1, 2]);

    expect(response).toEqual(0);
  });

  it('should be return undefined if is a empty or not array', async () => {
    const response = first([]);

    expect(response).toEqual(undefined);
  });
});
