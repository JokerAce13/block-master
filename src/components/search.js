import { Component, createElement } from '../lib/react/index.js'
import styled from '../lib/styled-components.js'
import Form from './form.js'
import Input from './input.js'
import Button from './button-icon.js'
import Icon from './icon.js'
import store from '../store.js'
import { SEARCH_MOVIE, SET_FILTER } from '../actions/index.js'

const ActionsMobileStyled = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`

const SearchMobileStyled = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  padding-inline-start: .5rem;
  gap: 1rem;
`

const ActionsWebStyled = styled.div`
  display: flex;
  min-width: 534px;
`

const SearchBarStyled = styled.div`
  display: flex;
  padding-block: .75rem !important;
  font: var(--body2-regular) !important;
  flex: 1;
`

class Search extends Component {
  handleSubmit = (event) => {
    event.preventDefault()
    const state = store.getState()
    const formData = new FormData(event.target)
    const query = formData.get('title')
    const queryAux = formData.get('titleAux')
    if (query || queryAux) {
      state.searchCriteria = query ? query : queryAux
      state.title = 'Resultados de búsqueda'
      return store.dispatch({
        type: SEARCH_MOVIE,
        payload: query ? query : queryAux
      })
    }
    const menuOptionsActive = document.querySelector('.is-active')
    state.title = menuOptionsActive.id === 'all' ? 'Todas las peliculas' : menuOptionsActive.textContent
    return store.dispatch({
      type: SET_FILTER,
      payload: 'all'
    })
  }

  handleSearchClick = (event) => {
    event.preventDefault()
    const logo = document.getElementById('header-logo')
    const searchMobile = document.getElementById('search-mobile')
    const actionsMobile = document.getElementById('actions-mobile')
    const searchIcon = document.getElementById('search-icon')
    const menuIcon = document.getElementById('menu-icon')
    logo.classList.toggle('is-hidden')
    actionsMobile.classList.toggle('is-hidden')
    searchIcon.classList.toggle('is-hidden')
    menuIcon.classList.toggle('is-hidden')
    searchMobile.classList.toggle('is-visible')
  }

  render() {
    return Form({
      class: 'search',
      onSubmit: this.handleSubmit,
      children: [
        ActionsMobileStyled({
          id: 'actions-mobile',
          class: 'actions-mobile',
          children: [
            createElement('img', {
              id: 'search-icon',
              onclick: this.handleSearchClick,
              src: './icons/search-primary.svg',
              width: '20px',
              height: '20px',
            }),
            new Icon({ id: 'menu-icon', iconUrl: './icons/menu.svg' }, 'Menu'),
          ]
        }),
        SearchMobileStyled({
          id: 'search-mobile',
          class: 'search-mobile',
          children: [
            createElement('img', { onclick: this.handleSearchClick, src: './icons/back.svg' }),
            SearchBarStyled({
              children: [
                new Input({
                  class: 'is-fully is-compact',
                  placeholder: 'Busca tu película favorita',
                  name: 'titleAux',
                  type: 'text'
                }),
                new Button(null, 'Buscar')
              ]
            })
          ]
        }),
        ActionsWebStyled({
          id: 'actions-web',
          class: 'actions-web',
          children: [
            new Input({
              class: 'is-fully',
              placeholder: 'Escribe tu película favorita',
              name: 'title',
              type: 'text'
            }),
            new Button(null, 'Buscar')
          ]
        })
      ]
    })
  }
}

export default Search


