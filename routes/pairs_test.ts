// url_test.ts
import { assertArrayIncludes, assertFalse } from "https://deno.land/std@0.179.0/testing/asserts.ts";
import { getAllPairs, getPlanning } from "./pairs.ts";

for (let i = 1; i <= 14; i++) {
  Deno.test({
    name: `test team of ${i}`,
    ignore: false,
    fn: () => {
      // Arrange
      const team: number[] = [...Array(i).keys()]
      // Act
      const results: [number, number][][] = getPlanning(team)
      // Assert
      const allPairs = getAllPairs(team)
      assertAllPairsInResult(results, allPairs)
      assertFalse(results.some(dayPairs => dayPairs.length < team.length / 2 - 1), 'has a result with too few pairs')
    }
  });

}

function assertAllPairsInResult(results: [number, number][][], allPairs: number[][]) {
  assertArrayIncludes(results.flat(), allPairs)
}
