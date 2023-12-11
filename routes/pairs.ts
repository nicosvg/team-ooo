export const getPairs = (teamSize: number, weekNumber: number): [number, number][] => {
  const planning = getPlanning([...Array(teamSize).keys()])
  const offset = weekNumber % planning.length
  return planning[offset] || []
};

export function getPlanning(team: number[]): [number, number][][] {
  const planning: [number, number][][] = []
  for (let i = 0; i < team.length; i++) {
    const pairs: [number, number][] = []
    for (let j = 0; j < team.length; j++) {
      pairs.push([j, (team.length - j + i) % team.length])
    }
    planning.push(pairs)

  }
  return planning
}

export function getAllPairs(team: number[]) {
  return team.flatMap(
    (v, i) => team.slice(i + 1).map(w => [v, w])
  );
}

function printPlanning(planning: [number, number][][]) {
  console.log('***** planning:')
  planning.forEach((day, index) => console.log('day', index, day))
}
