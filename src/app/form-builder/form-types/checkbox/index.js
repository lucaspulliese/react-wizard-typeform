import React from 'react';
import { RadioImagesWrapper, CheckboxOption } from './styled';

const Checkbox = ({ values, questionId }) => {
  return (
    <RadioImagesWrapper>
      {values.map(val => (
        <CheckboxOption key={val.id}>
          <img src={val.image} alt="" />
          <span>{val.label}</span>
          <input type="radio" name={questionId} value={val.id} />
          <div></div>
        </CheckboxOption>
      ))}
    </RadioImagesWrapper>
  );
}

export default Checkbox;