import { it, describe } from 'mocha';
import { expect } from 'chai';
import fetch from 'node-fetch';
describe('Serve', () => {
  it('get health', async () => {
    const resp = await fetch('http://localhost:3000/health');
    if (resp.ok) {
      const data: { success: boolean } = (await resp.json()) as any;
      expect(data.success).equal(true);
      console.log(data);
    }
  });
});
