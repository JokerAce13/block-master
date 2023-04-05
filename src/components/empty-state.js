import { Component, createElement } from '../lib/react/index.js'
import styled from '../lib/styled-components.js'

const EmptyStateStyled = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`

class EmptyState extends Component {
  render() {
    const { isVisible, criteria } = this.props
    return EmptyStateStyled({
        class: `empty-state  ${isVisible ? 'is-visible' : ''}`,
        children: [
            createElement('img', {id: 'empty-state-image', src: './images/empty-state.png'}),
            createElement('h1', {id: 'empty-state-description'}, `No se encontraron resultados para "${criteria}"`)
        ]
    })
  }
}

export default EmptyState
