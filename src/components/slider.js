import { Component } from '../lib/react/index.js'
import styled from '../lib/styled-components.js'
import Wrapper from './wrapper.js'
import Button from './button.js'

const SliderStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-block-end: 3.5rem;
`

const SlideStyled = styled.div`
  display: flex;
  align-items: flex-end;
  background-image: url("../../images/mulan.jpg");
  background-size: cover;
  border-radius: .5rem;
  block-size: 19.375rem;
  inline-size: 80rem;
  transition: all .4s ease-in-out;
`
const SlideButtonsStyled = styled.div`
  display: flex;
  gap: 1rem;
  padding: 2rem;
`


const SliderActionsStyled = styled.div`
  display: flex;
  gap: 1rem;
`

const ButtonActionStyled = styled.button`
  border-radius: 50%;
  inline-size: .75rem;
  block-size: .75rem;
  border: none;
  background-color: var(--grey);
  cursor: pointer;
`

class Slider extends Component {

  handleClick = (event) => {
    event.preventDefault()
    const slider = document.getElementById('slider')
    const slide = event.target.id
    const pagesActive = document.querySelectorAll('.button-is-active')

    pagesActive.forEach(element => {
      element.classList.remove('button-is-active')
    });

    if(slide === 'page1')
    {
      slider.style.backgroundImage = 'url(../../images/mulan.jpg)'
      event.target.classList.add('button-is-active')
    } else if (slide === 'page2'){
      slider.style.backgroundImage = 'url(../../images/raya.jpg)'
      event.target.classList.add('button-is-active')
    } else if (slide === 'page3'){
      slider.style.backgroundImage = 'url(../../images/unidos.jpg)'
      event.target.classList.add('button-is-active')
    }
  }


  render() {
    return Wrapper({
      children: SliderStyled({
      class: 'slider-hero',
      children: [
        SlideStyled({
          children: SlideButtonsStyled({
            children: [
              new Button({text: 'ver ahora', iconUrl: '../../icons/play.svg'}),
              new Button({text: 'ver después', iconUrl: '../../icons/plus.svg', isSecondary: true})
            ]
          }),
          id: 'slider',
          class: 'slider'
        }),
        SliderActionsStyled({
            children: [
                ButtonActionStyled({ onclick: this.handleClick, id: 'page1', class: 'button-is-active' }, ''),
                ButtonActionStyled({ onclick: this.handleClick, id: 'page2' }, ''),
                ButtonActionStyled({ onclick: this.handleClick, id: 'page3' }, ''),
            ]
          })
        ]
      })
    })
  }
}

export default Slider