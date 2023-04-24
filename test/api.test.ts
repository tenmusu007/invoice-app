import { ApiInstance } from '../helper/ApiInstance';
export {};
describe('API', () => {
  test('should return a 200', async () => {
    const mockData = { invoiceId: '6443617ceb584c09d26e6a19' };
    const response = await ApiInstance({
      method: 'post',
      url: 'mylist/get_invoice_data',
      data: mockData,
    });
    console.log(response.data);
    expect(response.status).toBe(200);
  });
});
const hogehoge = ""
const hogehoge2 = ""