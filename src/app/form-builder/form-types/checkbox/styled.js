import styled from 'styled-components/macro';

export const CheckboxWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: -8px;
  margin-right: -8px;
`

export const CheckboxOption = styled.label`
  width: calc(50% - 8px);
  padding: 10px 6px 7px 6px;
  display: flex;
  cursor: pointer;
  border-radius: 4px;
  position: relative;
  margin-right: 8px;
  margin-bottom: 8px;
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
    display: none;
    visibility: hidden;
    &:checked + div {
      background-color: rgba(255,255,255, 0.3);
    }
  }
  img {
    max-width: 80%;
    max-height: 80%;
    margin: 0 auto;
  }
  span {
    margin: 4px 5px;
    margin-top: auto;
    color: #FFF;
    font-size: 18px;
  }
`