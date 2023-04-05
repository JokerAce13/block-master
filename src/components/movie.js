import { Component, createElement } from '../lib/react/index.js'
import styled from '../lib/styled-components.js'
import store from '../store.js'
import { DETAIL_MOVIE } from '../actions/index.js'

const VoteAverageStyled = styled.span`
`

class Movie extends Component {

  handleClick = (event) => {
    event.preventDefault()
    const { id, poster_path, title, overview, vote_average } = this.props

    const state = store.getState()
    state.detailMovie = {
      id: id,
      poster_path: poster_path,
      title: title,
      overview: overview,
      vote_average: vote_average
    }

    store.dispatch({
      type: DETAIL_MOVIE,
      payload: id,
    })

    const modal = document.getElementById('detailMovieModal')
    modal.classList.toggle('is-modal-hidden')
  }

  render() {
    const { id, poster_path, title, overview, vote_average } = this.props
    return createElement('article', { onclick: this.handleClick,
      class: `movie ${vote_average >= 7 ? 'recommended': ''}`,
      children: [
        createElement('img', {
          class: 'movie-poster',
          src: `//image.tmdb.org/t/p/w220_and_h330_face${poster_path}`
        }),
        VoteAverageStyled({
          class: `movie-rate ${vote_average >= 7 ? 'movie-rate-recommended': ''}`,
          children: [
            createElement('img', {
            src: `./icons/star.svg`,
            height: '24px',
            width: '24px'
          }),
          createElement('span', {
          }, vote_average),
          ],
        }),
      ]
    })
  }
}

export default Movie