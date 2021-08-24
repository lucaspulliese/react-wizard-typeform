import React, { useState } from 'react';
import stepsData from 'app/utils/stepsData';
import { FormBuilderWrapper, StepWrapper } from './styled';
import { Section, Question } from './form-sections';
import { useForm } from "react-hook-form";

const FormBuilder = () => {
  const { register, handleSubmit, watch } = useForm();
  const [currentIndexForm, setCurrentIndexForm] = useState(0);

  const generateFormStep = (step) => {
    switch (step.type) {
      case 'section':
        return (
          <Section
            content={step.content}
            onNextStep={() => setCurrentIndexForm(currentIndexForm + 1)}
          />
        )
        break;

      case 'question':
        return (
          <Question
            title={step.title}
            content={step.content} 
          />
        )
        break;
      default:
        break;
    }
  }

  return (
    <FormBuilderWrapper>
      {stepsData.map((step, index) => 
        <StepWrapper key={index} active={index === currentIndexForm}>
          {generateFormStep(step)}
        </StepWrapper>  
      )}
    </FormBuilderWrapper>
  );
}

export default FormBuilder;
