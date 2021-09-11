import React, { useState } from 'react';
import { useFieldArray } from "react-hook-form";
import { CheckboxWrapper, CheckboxOption } from './styled';

const Checkbox = ({ values, questionId, setValue, getValues, control }) => {
  const [itemsChecked, setItemsChecked] = useState(getValues(questionId.toString()) || []);  

  const { remove } = useFieldArray({
    control,
    name: questionId.toString(),
  });

  const handleChange = (option) => {
    let values = getValues(questionId.toString());
    if(!values) {
      values = [];
    }

    const indexFound = values.findIndex(item => item.id === option.id);

    if(indexFound > -1) {
      remove(indexFound);
      const valuesToSave = values.filter(item => item.id !== option.id);
      setItemsChecked(valuesToSave);
    } else {
      const valuesToSave = [ ...values, option ];
      setItemsChecked(valuesToSave);
      setValue(questionId.toString(), valuesToSave);
    }
  };

  return (
    <CheckboxWrapper>
      {values.map(val => (
        <CheckboxOption key={val.id}>
          <img src={val.image} alt="" />
          <span>{val.label}</span>
          <input
            defaultChecked={itemsChecked.some(item => item.id === val.id)}
            onClick={() => handleChange(val)}
            type="checkbox" 
            name={questionId} 
            value={val.id}
          />
          <div></div>
        </CheckboxOption>
      ))}
    </CheckboxWrapper>
  );
}

export default Checkbox;