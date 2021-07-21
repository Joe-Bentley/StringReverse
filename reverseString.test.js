const { test, expect } = require('@jest/globals');
const reverseString = require('./reverseString');

test("It should reverse a string", () => {
    expect(reverseString('hello')).toEqual('olleh');
});
