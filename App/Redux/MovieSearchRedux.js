import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  request: ['payload'],
  success: ['results'],
  failure: null
})

export const MovieSearchTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  matches: [],
  fetching: null,
  error: null,
  page: 1,
})

/* ------------- Selectors ------------- */

export const SearchSelectors = {
  selectMatches: state => state.movies.matches
}

/* ------------- Reducers ------------- */

// request the matches for a search
export const request = (state, { query }) =>
  state.merge({ fetching: true, query })

// successful search
export const success = (state, { results } ) => {
  // TODO merge by tracking query and page
  // console.log('MOVIESEARCHREDUX', state.matches, results.matches)
  return state.merge({ 
    fetching: false, 
    error: null, 
    matches: results.matches || [], 
    page: results.page || 1,
  })
}
// failed to get the avatar
export const failure = (state) =>
  state.merge({ fetching: false, error: true, matches: [] })

/* ------------- Hookup Reducers To Types/Handlers ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.REQUEST]: request,
  [Types.SUCCESS]: success,
  [Types.FAILURE]: failure
})
