import React, { useState } from 'react';
import stepsData from 'app/utils/stepsData';
import { FormBuilderWrapper, StepWrapper } from './styled';

const FormBuilder = () => {
  const [currentIndexForm, setCurrentIndexForm] = useState(0);

  const generateFormStep = () => {

  }

  return (
    <FormBuilderWrapper>
      {stepsData.map(step => (
        <p>{step.id}</p>
      ))}
    </FormBuilderWrapper>
  );
}

export default FormBuilder;
