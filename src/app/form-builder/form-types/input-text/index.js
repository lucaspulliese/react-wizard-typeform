import React, { useState } from 'react';
import { InputWrapper, Input } from './styled';

const InputText = ({ values, questionId, setValue, getValues, control }) => {
  const [itemsChecked, setItemsChecked] = useState(getValues(questionId.toString()) || []);  

  const handleChange = (option) => {
  };

  return (
    <InputWrapper>
      <Input 

      />
    </InputWrapper>
  );
}

export default InputText;