import { Component, createElement } from '../lib/react/index.js'
import styled from '../lib/styled-components.js'

const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary) ;
  padding: .625rem 1.5rem;
  border: none;
  font: var(--button);
  color: var(--black);
  border: 1px solid var(--primary);
  border-radius: .5rem;
  text-transform: uppercase;
  gap: 0.75rem;
`

const Icon = styled.img`
  inline-size: 1.5rem;
  block-size: 1.5rem;
`

class Button extends Component {
  render() {

    const {text, iconUrl, isSecondary, isFully} = this.props

    return ButtonStyled({
      class: `${isSecondary ? 'is-secondary' : ''} ${isFully ? 'is-fully' : ''}`,
      children: [
        Icon({ src: iconUrl, height: '14px', width: '14px'  }),
        createElement('span', {}, text)
      ],
    },)
  }
}

export default Button