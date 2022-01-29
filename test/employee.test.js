
const employee = require('./script');

test('properly logs generated page when user is done answering prompts', () => {
    expect(employee).toReturn(userHtmlPage);
});






