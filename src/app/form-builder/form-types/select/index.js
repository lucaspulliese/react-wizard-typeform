import React, { useState } from 'react';
import { SelectWrapper, InputSelect, OptionsWrapper, Option } from './styled';

const Select = ({ values, questionId }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <SelectWrapper>
      <InputSelect 
        placeholder="Type or select an option"
        onFocus={() => setMenuIsOpen(true)} 
        onBlur={() => setMenuIsOpen(false)} 
      />
      {menuIsOpen &&
        <OptionsWrapper>
          {values.map(val => (
            <Option key={val.id}>
              {val.label}
            </Option>
          ))}
        </OptionsWrapper>
      }
    </SelectWrapper>
  );
}

export default Select;
