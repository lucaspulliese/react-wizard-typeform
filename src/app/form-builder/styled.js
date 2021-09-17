import styled from 'styled-components/macro';

export const FormBuilderWrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`

export const StepWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  transition: all .5s ease;
  opacity: ${props => props.active ? 1 : 1};
  z-index: ${props => props.active ? '1' : '1'};
`