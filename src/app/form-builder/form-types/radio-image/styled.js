import styled from 'styled-components/macro';

export const RadioImagesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CheckboxOption = styled.label`
  height: 297px;
  width: 48%;
  padding: 4px;
  border-radius: 4px;
  position: relative;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all .3s ease;
    background-color: rgba(255,255,255, 0.1);
    box-shadow: rgba(255, 255, 255, 0.6) 0px 0px 0px 1px inset;
    &:hover {
      background-color: rgba(255,255,255, 0.3);
    }
  }
  input {
    width: 1px;
    height: 1px;
    opacity: 0;
    visibility: hidden;
    &:checked + div {
      background-color: rgba(255,255,255, 0.3);
    }
  }
  img {
    max-width: 80%;
    max-height: 80%;
    margin: 0 auto;
    margin-top: 15px;
  }
  span {
    margin: 4px 5px;
    margin-top: auto;
    color: #FFF;
    font-size: 18px;
  }
`