import axios from 'axios'

export const getGames = async typeString => {
  const response = await axios.get('/api/test')
  return response.data.results
}
