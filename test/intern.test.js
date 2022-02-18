const intern = require('../lib/intern');

test('can display school', () => {
    const school = 'NYU';
    const i = intern;
    expect(i.school).toBe(school);
});

