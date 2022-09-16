import { test, expect } from "vitest";
import _ from "lodash";
import { chunk, join } from "../array";
test("join", () => {
  let str = _.join(["a", "b", "c"], "~");
  let str2 = join(["a", "b", "c"], "~");
  expect(str).toBe(str2);
});
test("chunk", () => {
  let a = ["a", "b", "c", "d"];
  let b = 2;
  let str = _.chunk(a, b);
  let str2 = chunk(a, b);
  expect(str).toEqual(str2);
});
