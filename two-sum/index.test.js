import { expect, test } from "vitest"
import { twoSum } from "./index.js"

test("finds the pair", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
})
