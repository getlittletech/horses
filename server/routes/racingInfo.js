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

const handle = async ctx => {
  try {
    const summaryUrl = 'https://www.atg.se/services/racinginfo/v1/api/products/' + ctx.params.gameType.toUpperCase()
    const summary = await axios.get(summaryUrl)
    ctx.body = summary.data
  } catch (error) {
    ctx.throw(404, error)
  }
}

module.exports = { validate, handle }
