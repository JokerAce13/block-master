import { Component } from '../lib/react/index.js'
import styled from '../lib/styled-components.js'

const ButtonIconStyled = styled.button`
  background-color: var(--primary) ;
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 0px .5em .5em 0px;
`

const Icon = styled.img`
  inline-size: 1.5rem;
  block-size: 1.5rem;
`

class ButtonIcon extends Component {
  render() {
    return ButtonIconStyled({
      children: [
        Icon({ src: './icons/search.svg' }),
      ]
    })
  }
}

export default ButtonIcon