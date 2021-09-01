import React from 'react';
import { CheckboxWrapper, CheckboxOption } from './styled';

const Checkbox = ({ values, questionId }) => {
  return (
    <CheckboxWrapper>
      {values.map(val => (
        <CheckboxOption key={val.id}>
          <img src={val.image} alt="" />
          <span>{val.label}</span>
          <input type="radio" name={questionId} value={val.id} />
          <div></div>
        </CheckboxOption>
      ))}
    </CheckboxWrapper>
  );
}

export default Checkbox;