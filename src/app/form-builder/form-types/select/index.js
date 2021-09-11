import React, { useState, useEffect, useRef } from 'react';
import { SelectWrapper, InputSelect, OptionsWrapper, Option } from './styled';

// Hook
function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = (event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }

        handler(event);
      };

      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);

      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    [ref, handler]
  );
}

const Select = ({ values, questionId, setValue, getValues }) => {
  const selectRef = useRef(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [itemChecked, setItemChecked] = useState(getValues(questionId.toString()) || {});  

  useOnClickOutside(selectRef, () => { 
    setMenuIsOpen(false);
  });

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

    setMenuIsOpen(false);
  };

  return (
    <SelectWrapper ref={selectRef}>
      <InputSelect 
        value={itemChecked.label}
        placeholder="Type or select an option"
        onFocus={() => setMenuIsOpen(true)} 
      />
      {menuIsOpen &&
        <OptionsWrapper>
          {values.map(val => (
            <Option selected={itemChecked.id === val.id} onClick={() => handleChange(val)} key={val.id}>
              {val.label}
            </Option>
          ))}
        </OptionsWrapper>
      }
    </SelectWrapper>
  );
}

export default Select;
