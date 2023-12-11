// url_test.ts
import { assertArrayIncludes, assertFalse } from "https://deno.land/std@0.179.0/testing/asserts.ts";
import { getAllPairs, getPlanning } from "./pairs.ts";

type Pair = [number, number]
type Schedule = Pair[][]

for (let i = 0; i <= 9; i++) {
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
      // Check that there are no pair in double
      assertNoSamePair(results)
      assertFalse(results.some(dayPairs => dayPairs.length < team.length / 2 - 1), 'has a result with too few pairs')
    }
  });
}

function assertNoSamePair(schedule: Schedule) {
  const existing: Pair[] = []
  for (const week of schedule) {
    for (const pair of week) {
      assertFalse(existing.some(p => p[0] === pair[0] && p[1] === pair[1]))
      existing.push(pair)
    }
  }
}

function assertAllPairsInResult(results: [number, number][][], allPairs: number[][]) {
  assertArrayIncludes(results.flat(), allPairs)
}
