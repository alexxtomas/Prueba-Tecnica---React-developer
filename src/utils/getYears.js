export const getYears = (entries, programType) => {
  return entries
    .filter((entry) => entry.programType === programType)
    .map(({ releaseYear }) => releaseYear)
    .filter((year, i, arr) => arr.indexOf(year) === i)
    .sort((a, b) => b - a)
}
