import oddValues from "./oddValues";

test("letter frequencies: test", () => {
  expect(
    oddValues({
      t: 2,
      e: 1,
      s: 1,
    })
  ).toEqual(2);
});

test("letter frequencies: potspot", () => {
  expect(
    oddValues({
      p: 2,
      o: 2,
      t: 2,
      s: 1,
    })
  ).toEqual(1);
});