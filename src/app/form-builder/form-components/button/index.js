import React from 'react';
import { Button, ButtonWrapper } from './styled';

const ButtonComp = ({ children, onClick }) => {
  return (
    <ButtonWrapper>
      <Button onClick={onClick}>
        { children }
      </Button>
    </ButtonWrapper>
  );
}

export default ButtonComp;
