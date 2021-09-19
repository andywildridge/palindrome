import charFrequency from "./charFrequency";

test("letter frequencies: andy", () => {
  expect(charFrequency("andy")).toStrictEqual({
    a: 1,
    n: 1,
    d: 1,
    y: 1,
  });
});

test("letter frequencies: potspot", () => {
  expect(charFrequency("potspot")).toStrictEqual({
    p: 2,
    o: 2,
    t: 2,
    s: 1,
  });
});