import styled from 'styled-components/macro';

export const Button = styled.button`
  position: relative;
  font-family: inherit;
  font-weight: 700;
  cursor: pointer;
  font-size: 18px;
  transition-duration: 0.1s;
  transition-property: background-color, color, border-color, opacity, box-shadow;
  transition-timing-function: ease-out;
  outline: currentcolor none medium;
  border: 1px solid transparent;
  margin: 0px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 12px 0px;
  padding: 8px 18px;
  min-height: 48px;
  background-color: rgb(255, 255, 255);
  color: rgb(128, 128, 128);
  border-radius: 4px;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`