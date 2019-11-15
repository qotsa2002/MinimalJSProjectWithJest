test('adds 2 and 3 to equal 5', () => {
    expect(sum(2, 3)).toBe(5);
});

function sum(a, b) {
    return a + b;
}