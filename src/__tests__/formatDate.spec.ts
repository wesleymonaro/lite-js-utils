import moment from 'moment';
import { formatDate } from '..';

describe('formatDate', () => {
  it('should be able to format a valid date', async () => {
    const response = formatDate('1993-03-12', 'YYYY-MM-DD', 'DD/MM/YYYY');

    expect(response).toEqual('12/03/1993');
  });

  it('should be able to format a Date type', async () => {
    const response = formatDate(new Date(), 'YYYY-MM-DD', 'DD/MM/YYYY');

    expect(response).toEqual(moment().format('DD/MM/YYYY'));
  });

  it('should be able to format with pass only date', async () => {
    const response = formatDate(new Date());

    expect(response).toEqual(moment().format('DD/MM/YYYY'));
  });

  it('should be able to format with pass only string date', async () => {
    const response = formatDate('1993-03-12');

    expect(response).toEqual('12/03/1993');
  });

  it('should be return empty string if pass an invalid date', async () => {
    const response = formatDate('9999-99-99', 'YYYY-MM-DD', 'DD/MM/YYYY');

    expect(response).toEqual('');
  });
});
