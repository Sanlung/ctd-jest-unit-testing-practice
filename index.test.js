const utils = require("./index.js");

describe("Test fahrenheit to celsius conversion", () => {
  test("32 degrees fahrenheit should be 0 degrees celsius", () => {
    expect(utils.fahrenheitToCelsius(32)).toBe(0);
  });
  test("-40 degrees fahrenheit should be -40 degrees celsius", () => {
    expect(utils.fahrenheitToCelsius(-40)).toBe(-40);
  });
});

describe("Test celsius to fahrenheit conversion", () => {
  test("100 degrees celsius should be 212 degrees fahrenheit", () => {
    expect(utils.celsiusToFahrenheit(100)).toBe(212);
  });
  test("0 degrees celsius should be 32 degrees fahrenheit", () => {
    expect(utils.celsiusToFahrenheit(0)).toBe(32);
  });
});

describe("Test getting the first string from an array", () => {
  test("Returns the first item if it is a string", () => {
    const testList = ["hello", "world"];
    expect(utils.getFirstStringFromArray(testList)).toBe("hello");
  });
  test("Returns null for an empty array", () => {
    // Write your test code here
    expect(utils.getFirstStringFromArray([])).toBeNull();
  });
  test("Returns null if no strings are in the array", () => {
    // Write your test code here
    const testList = [0, 2];
    expect(utils.getFirstStringFromArray(testList)).toBeNull();
  });
  test("Returns the second item if the first item is a number", () => {
    // Write your test code here
    const testList = [2, "hello"];
    expect(utils.getFirstStringFromArray(testList)).toBe("hello");
  });
});
