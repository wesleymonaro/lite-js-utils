import { clone } from '..';

describe('clone', () => {
  it('should be able to clone an element', async () => {
    const obj = {
      a: 'a',
      b: 'b',
    };
    const response = clone(obj);

    expect(response).toEqual(obj);
  });
});
