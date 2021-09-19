import palindrome from "./palindrome";

test("test cannot be arranged as a palindrome", () => {
  expect(palindrome("test")).toBe(false);
});

test("abcba is a palindrome", () => {
  expect(palindrome("abbca")).toBe(true);
});

test("1221 reads the same forwards and backwards", () => {
  expect(palindrome("1221")).toBe(true);
});

test("1221 is not a string", () => {
  expect(palindrome(1221)).toBe(false);
});

test("bacdb cannot be arranged as a palindrome", () => {
  expect(palindrome("abbcd")).toBe(false);
});

test("Pot spot can be arranged as topspot", () => {
  expect(palindrome("Pot spot")).toBe(true);
});

test("Was it a car or a cat I saw - is a palindrome", () => {
  expect(palindrome("Was it a car or a cat I saw")).toBe(true);
});

test("Was it a car or dog I saw - is not a palindrome", () => {
  expect(palindrome("Was it a car or dog I saw")).toBe(false);
});

test("This is a longer palindrome sentence", () => {
  expect(
    palindrome("Are we not drawn onward, we few, drawn onward to new era")
  ).toBe(true);
});
