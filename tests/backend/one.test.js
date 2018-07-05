const { absolute } = require('../../src/server/utils/absolute');

describe('absolute', () => {
  
  it('1', () => {
    const result = absolute(1);
    expect(result).toBe(1);
  });
  
  it('-1', () => {
    const result = absolute(-1);
    expect(result).toBe(1);
  });
  
  it('0', () => {
    const result = absolute(0);
    expect(result).toBe(0);
  });
  
});

