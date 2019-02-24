import axios from 'axios'

export const getGames = async gameType => {
  const url = '/api/racinginfo/' + encodeURIComponent(gameType)
  try {
    const response = await axios.get(url)
    return response.data.results
  } catch (error) {
    if (error?.response?.data && error?.response?.status === 422) {
      throw new Error(error.response.data)
    }

    throw new Error('Sorry, something went wrong.')
  }
}
