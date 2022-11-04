const baseURL = 'http://localhost:3000'

const getEntries = async () => {
  const response = await fetch(`${baseURL}/entries`)
  return await response.json()
}

export default { getEntries }
