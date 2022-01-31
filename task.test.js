const {zadacha1} = require ('./task')

test('The sum of all numbers divisible by 5', () => {
  let result = 'Sum 945 and count 18'
    expect(zadacha1()).toBe(result);
});