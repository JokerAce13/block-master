import { Component } from '../lib/react/index.js'
import styled from '../lib/styled-components.js'
import MenuItem from './menu-item.js'
import store from '../store.js'
import { SET_FILTER } from '../actions/index.js'

const MenuStyled = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding-inline-start: 0;
`

const LinkStyled = styled.a`
  text-decoration: none;
  color: white;
`

class Menu extends Component {

  handleClick = (event) => {
    event.preventDefault()
    const state = store.getState()
    state.title = event.target.id === 'all' ? 'Todas las peliculas' : event.target.textContent
    store.dispatch({
      type: SET_FILTER,
      payload: event.target.id,
    })

    const menuOptionsActive = document.querySelectorAll('.is-active')

    menuOptionsActive.forEach(element => {
      element.classList.remove('is-active')
    });

    event.target.classList.add('is-active')
  }


  render() {
    return MenuStyled({
      id: 'menu',
      class: 'menu',
      children: [
        MenuItem({
            children: LinkStyled({ onclick: this.handleClick, id: 'all', href: '#', class: 'is-active' }, 'Todas')
        }),
        MenuItem({
            children: LinkStyled({ onclick: this.handleClick, id: 'mostValued', href: '#' }, 'Más Valoradas')
        }),
        MenuItem({
            children: LinkStyled({ onclick: this.handleClick, id: 'leastValued', href: '#' }, 'Menos Valoradas')
        })
      ]
    })
  }
}

export default Menu