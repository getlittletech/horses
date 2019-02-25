const axios = require('axios')
const validator = require('validator')

const validateGameTypes = gameType => {
  const validTypes = ['V75', 'V65', 'V64', 'V4']

  const error =
    'Wrong game type. Allowed types are: ' +
    validTypes.slice(0, validTypes.length - 1) +
    ' and ' +
    validTypes[validTypes.length - 1]

  if (!gameType) return error

  const isAlphaNumeric = validator.isAlphanumeric(gameType)

  if (!isAlphaNumeric || !validTypes.includes(gameType.toUpperCase())) {
    return error
  }

  return null
}

const validate = async (ctx, next) => {
  const error = validateGameTypes(ctx.params.gameType)
  if (!error) {
    return next()
  } else {
    ctx.throw(422, error)
  }
}

const getClosest = (games, now) => {
  let closest = games[0]
  const closestDate = new Date(closest.startTime)
  let minDiff = Math.abs(now.getTime() - closestDate.getTime())

  games.forEach(game => {
    const gameDate = new Date(game.startTime)
    const diff = Math.abs(now.getTime() - gameDate.getTime())
    if (diff < minDiff) {
      closest = game
      minDiff = diff
    }
  })

  return closest
}

const handle = async ctx => {
  try {
    const gameType = ctx.params.gameType.toUpperCase()
    const summaryUrl = 'https://www.atg.se/services/racinginfo/v1/api/products/' + gameType
    const {
      data: { upcoming, results },
    } = await axios.get(summaryUrl)

    let field = null
    let closest = null

    if (upcoming) {
      closest = getClosest(upcoming, new Date())
      field = 'upcoming'
    } else if (results) {
      closest = getClosest(results, new Date())
      field = 'results'
    }

    const detailsUrl = 'https://www.atg.se/services/racinginfo/v1/api/games/' + closest.id
    const {
      data: { races },
    } = await axios.get(detailsUrl)

    if (!races) {
      ctx.body = { message: 'No information available' }
      return
    }

    ctx.body = {
      id: closest.id,
      gameType,
      startTime: closest.startTime,
      [field]: races,
    }
  } catch (error) {
    ctx.throw(404, error)
  }
}

module.exports = { validate, handle }
