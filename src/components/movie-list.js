import { Component, createElement } from '../lib/react/index.js'
import styled from '../lib/styled-components.js'
import Wrapper from './wrapper.js'
import Movie from './movie.js'
import store from '../store.js'
import api from '../api.js'
import { ADD_MOVIES } from '../actions/index.js'
import EmptyState from './empty-state.js'
import ModalDetailMovie from './modal-detail-movie.js'
import Spinner from './spinner.js'

const MovieListStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, 220px);
  justify-content: space-between;
  box-sizing: border-box;
  column-gap: 1.5625rem;
  row-gap: 3rem;
`

const SpinnerContainerStyled = styled.div`
    display: none;
    align-items: center;
    justify-content: center;
`

window.addEventListener("resize", function(){
  const searchMobile = this.document.getElementById('search-mobile')
  const headerLogo = this.document.getElementById('header-logo')

  if (screen.width > 768) {
    searchMobile.classList.remove('is-visible')
    headerLogo.classList.remove('is-hidden')
  }
});

class MovieList extends Component {
  state = {
    page: 1
  }

  getPage = async (page) => {
    const spinner = document.getElementById('spinner')
    spinner.classList.add('is-visible')

    const { results } = await api.moviePage(page)
    store.dispatch({
      type: ADD_MOVIES,
      payload: results
    })
  }

  handleIntersection = (entries) => {
    if(entries[0].isIntersecting) {
      this.getPage(this.state.page)
      this.setState({
        page: this.state.page + 1
      })

    }
    const spinner = document.getElementById('spinner')
     spinner.classList.toggle('is-visible')
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState()
    })
    const observer = new IntersectionObserver(this.handleIntersection)
    observer.observe(window.intersector)
  }
  render() {
    const state = store.getState()
    const movieListId = state.list[state.filter]
    const movieList = state.movieList
    const isVisible = movieListId.length === 0
    return Wrapper({
      children: [
        new ModalDetailMovie(),
        createElement('h1', {id: 'title-section', class: 'md-3 title-section'}, state.title),
        new EmptyState({ isVisible: isVisible, criteria: state.searchCriteria }),
        MovieListStyled({
          class: 'movieList',
          children: movieListId.map(id => new Movie(movieList.get(id)))
        }),
        SpinnerContainerStyled({
          class: 'spinner',
          id: 'spinner',
          children: new Spinner()
        })
      ]
    })
  }
}

export default MovieList
