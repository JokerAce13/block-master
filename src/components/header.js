import { Component } from '../lib/react/index.js'
import styled from '../lib/styled-components.js'
import Wrapper from './wrapper.js'
import Menu from './menu.js'
import Search from './search.js'

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  padding-block: 1.5rem;
  font: var(--body1-regular);
`

const HeaderLogo = styled.img`
  inline-size: 120px;
  block-size: 80px;
`

class Header extends Component {
  render() {
    return Wrapper({
      children: HeaderStyled({
        class: 'header',
        children: [
          HeaderLogo({ id: 'header-logo', class: 'header-logo', src: './images/logo.png' }),
          new Menu(),
          new Search(),
        ]
      })
    })
  }
}

export default Header