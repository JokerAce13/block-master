import { Component } from '../lib/react/index.js'
import styled from '../lib/styled-components.js'

const IconStyled = styled.img`
  inline-size: 1.5rem;
  block-size: 1.5rem;
`

class Icon extends Component {
  render() {

    const { id, iconUrl } = this.props
    return IconStyled({ id: id, src: iconUrl, height: '14px', width: '14px' })
  }
}

export default Icon