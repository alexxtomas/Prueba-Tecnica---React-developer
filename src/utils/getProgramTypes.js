export const getProgramTypes = (entries) =>
  entries
    .map(entry => entry.programType)
    .filter((programType, index, arr) => arr.indexOf(programType) === index)
