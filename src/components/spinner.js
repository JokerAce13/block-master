import styled from '../lib/styled-components.js'

const SpinnerStyled = styled.div`
   margin-block: 1rem;
   width: 56px;
   height: 56px;
   border-radius: 50%;
   background: conic-gradient(#0000 10%,#fed941);
   -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 9px),#000 0);
   animation: spinnerControl 1s infinite linear;
`

export default SpinnerStyled
