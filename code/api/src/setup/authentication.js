// Imports
import jwt from 'jsonwebtoken'
import serverConfig from '../config/server.json'

// Authentication middleware
export default function (request, response, next) {
  let authToken = request.headers.authorization

  if (authToken && authToken !== null) {
    // if there is a token and it's not null
    try {
      const token = authToken.split(' ')
      request.user = jwt.verify(token[1], serverConfig.secret)
    } catch (e) {
      // if the token can't be cerified
      console.warn('Invalid token detected.')
    }
  } else {
    request.user = {}
  }

  next()
}
