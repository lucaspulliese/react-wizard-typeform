import React, { useState } from 'react';
import { InputWrapper, Input } from './styled';

const InputText = ({ placeholder, register, questionId }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  return (
    <InputWrapper>
      <Input 
        value={value} 
        {...register(questionId.toString())}
        name={questionId.toString()}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </InputWrapper>
  );
}

export default InputText;