const suma = require('../src/app');

test('suma de 2 + 3 deber ser 5', () => {
    expect(suma(2, 3)).toBe(5);
});