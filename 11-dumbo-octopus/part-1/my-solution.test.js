const mySolution = require('./my-solution');

test('example input', () => {
    expect(mySolution("./11-dumbo-octopus/example-input.in")).toBe(1656);
});

test('my input', () => {
    expect(mySolution("./11-dumbo-octopus/my-input.in")).toBe(1741);
});