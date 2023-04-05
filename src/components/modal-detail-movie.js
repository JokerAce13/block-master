import { Component, createElement } from '../lib/react/index.js'
import styled from '../lib/styled-components.js'
import Button from './button.js'
import Overlay from './overlay.js'
import store from '../store.js'

const ModalDetailMovieStyled = styled.div`
  position: absolute;
  background-color: var(--white);
  block-size: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  flex: 1;
  flex-direction: column;
`

const DetailMovieContainerStyled = styled.div`
  display: flex;
  gap: 10rem;
  padding-inline-end: 1rem;

  position: fixed;
  inset-block-start: 30%;
  inset-inline-start: 50%;
  transform: translateY(-50%) translateX(-50%);
  z-index: 3;
  margin-inline-start: 5rem;
`

const DetailMovieStyled = styled.div`
  inline-size: 35rem;
  flex: 1;
`

const DetailMovieHeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const ImageContainerStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

const DetailMovieImageStyled = styled.img`
  position: relative;
  border-radius: .5rem;
  transform: matrix(0.87, -0.5, 0.87, 0.5, 0, 0);
`

const DetailMovieButtonsStyled = styled.div`
  display: flex;
  gap: 1rem;
  padding-block-start: 2rem;
  flex: 1;
`

const DetailMovieCloseStyled = styled.img`
  position: fixed;
  inset-block-start: 10%;
  inset-inline-start: 87%;
  transform: translateY(-50%) translateX(-50%);
  z-index: 3;
`

const VoteAverageStyled = styled.span`
  position: absolute;
  top: 8%;
  left: 0px;
  transform: matrix(0.8, -0.5, 0.87, 0.5, -75, 95);
`

class ModalDetailMovie extends Component {

    handleCloseClick = (event) => {
      event.preventDefault()
      const modal = document.getElementById('detailMovieModal')
      modal.classList.toggle('is-modal-hidden')
    }

    render() {
        const state = store.getState()
        const { id, poster_path, title, overview, vote_average } = state.detailMovie

        return Overlay({ id: 'detailMovieModal',
        class: 'is-modal-hidden',
        children: ModalDetailMovieStyled({
            children:[
                DetailMovieHeaderStyled({
                  children: DetailMovieCloseStyled({
                    class: 'detail-close',
                    onclick: this.handleCloseClick,
                    src: './icons/delete.svg'
                  })
                }),
                DetailMovieContainerStyled({
                    class: 'detail-container',
                    children: [
                      ImageContainerStyled({
                        children: [ DetailMovieImageStyled({
                            class: 'detail-image',
                            src: poster_path ? `//image.tmdb.org/t/p/w220_and_h330_face${poster_path}` : ''
                          }),
                          VoteAverageStyled({
                            class: `movie-rate-mobile movie-rate ${vote_average >= 7 ? 'movie-rate-recommended': ''}`,
                            children: [
                              createElement('img', {
                              src: `./icons/star.svg`,
                              height: '24px',
                              width: '24px'
                            }),
                            createElement('span', {}, vote_average),
                            ],
                          }),
                          ]
                        }),
                        DetailMovieStyled({
                            class: 'detail-movie',
                            children: [
                                createElement('h1',{}, title ),
                                createElement('p',{ class: 'detail-overview' }, overview ),
                                createElement('span',{}, '2023 • Crimen/suspenso • 1h 40m' ),
                                DetailMovieButtonsStyled({
                                    class: 'detail-buttons',
                                    children: [
                                        new Button({text: 'ver ahora', iconUrl: './icons/play.svg', isFully: true}),
                                        new Button({text: 'ver después', iconUrl: './icons/plus.svg', isSecondary: true, isFully: true})
                                    ]
                                })
                            ]
                        }),
                    ]
                })
              ]
            })
        })
      }

}

export default ModalDetailMovie