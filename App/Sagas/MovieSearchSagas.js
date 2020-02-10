import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import MovieSearchActions from '../Redux/MovieSearchRedux'

// testing
const data = require('../Fixtures/movieSearchResults.json')

export function * getMoviePage (api, action) {
  const { query, page } = action // not paging yet TODO

  // make the call to the api
  const response = yield call(api.getMovies, action.payload.query)
  // response = {}
  response.ok = true

  if (response.ok) {
    const matches = path(['data', 'results'], response)
    // const matches = data.results
    yield put(MovieSearchActions.success({ matches }))
  } else {
    yield put(MovieSearchActions.failure())
  }
}
