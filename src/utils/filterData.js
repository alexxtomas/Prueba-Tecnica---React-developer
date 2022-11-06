export const filterData = (data) => {
  if (!Array.isArray(data)) throw new Error('Data should be an array')
  const copy = [...data].filter(d => d?.releaseYear >= 2010)
  return copy.sort((a, b) => a.title.localeCompare(b, 'en', { numeric: true }))
}
