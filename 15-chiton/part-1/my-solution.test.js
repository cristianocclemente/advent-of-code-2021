const mySolution = require('./my-solution');

test('example input', () => {
    expect(mySolution("./15-chiton/example-input.in")).toBe(40);
});

test('my input', () => {
    expect(mySolution("./15-chiton/my-input.in")).toBe(609);
});