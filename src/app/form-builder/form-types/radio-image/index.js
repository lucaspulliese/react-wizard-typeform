import React, { useState } from 'react';
import { RadioImagesWrapper, CheckboxOption } from './styled';

const RadioImage = ({ values, questionId, setValue, getValues }) => {
  const [itemChecked, setItemChecked] = useState(getValues(questionId.toString()) || {});  

  const handleChange = (option) => {
    let valueSelected = getValues(questionId.toString());
    if(!valueSelected) {
      valueSelected = {};
    }

    if(valueSelected.id === option.id) {
      setItemChecked({});
      setValue(questionId.toString(), {});
    } else {
      setItemChecked(option);
      setValue(questionId.toString(), option);
    }
  };

  return (
    <RadioImagesWrapper>
      {values.map(val => (
        <CheckboxOption key={val.id}>
          <img src={val.image} alt="" />
          <span>{val.label}</span>
          <input
            defaultChecked={itemChecked.id === val.id}
            onClick={() => handleChange(val)}
            type="radio" 
            name={questionId} 
            value={val.id} 
          />
          <div></div>
        </CheckboxOption>
      ))}
    </RadioImagesWrapper>
  );
}

export default RadioImage;
