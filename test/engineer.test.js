const engineer = require('../lib/engineer');

test('can display github', () => {
    const test = EngGithub;
    const eng  = engineer;
    expect(eng.EngGithub).toBe(test);
});

