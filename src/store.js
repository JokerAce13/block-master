import { createStore } from './redux/index.js'
import reducer from './reducers/index.js'
import movies from './movies.js'
import {
  movieListAsMap,
  getAllIds,
  getMostValuedIds,
  getLeastValuedIds,
} from './normalize.js'

const initialState = {
  movieList: movieListAsMap(movies),
  filter: 'all',
  title: 'Todas las peliculas',
  searchCriteria: '',
  isModalHidden: false,
  detailMovie: {
    id: 0,
    poster_path: '',
    title: '',
    overview: '',
    vote_average: 0
  },
  list: {
    all: getAllIds(movies),
    mostValued: getMostValuedIds(movies),
    leastValued: getLeastValuedIds(movies),
  }
}

const store = createStore(reducer, initialState)

export default store
