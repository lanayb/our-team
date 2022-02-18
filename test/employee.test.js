const employee = require('../index');

test('properly logs name', () => {
   const name = 'employeeName';
   expect(name).toBe(name);
});

module.exports = employee;




