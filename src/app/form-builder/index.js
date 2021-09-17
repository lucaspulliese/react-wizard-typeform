import React, { useState, useEffect } from 'react';
import stepsData from 'app/utils/stepsData';
import { FormBuilderWrapper, StepWrapper } from './styled';
import { Section, Question } from './form-sections';
import { useForm } from "react-hook-form";

const FormBuilder = () => {
  const { register, control, reset, setValue, getValues } = useForm();
  const [currentIndexForm, setCurrentIndexForm] = useState(0);

  useEffect(() => {
    const currentStep = stepsData[currentIndexForm];
    if(currentStep.should_save) {
      const values = getValues();
      console.log(values);
      localStorage.setItem('form-values', JSON.stringify(values));
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndexForm]);

  useEffect(() => {
    const formValues = localStorage.getItem('form-values');
    if(formValues) {
      reset(JSON.parse(formValues));
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const generateFormStep = (step) => {
    switch (step.type) {
      case 'section':
        return (
          <Section
            hideNextButton={step.hide_next_button}
            content={step.content}
            onNextStep={() => setCurrentIndexForm(currentIndexForm + 1)}
          />
        )
      case 'question':
        return (
          <Question
            control={control}
            setValue={setValue}
            getValues={getValues}
            register={register}
            questionId={step.question_id}
            title={step.title}
            content={step.content} 
            onPrevStep={() => setCurrentIndexForm(currentIndexForm - 1)}
            onNextStep={() => setCurrentIndexForm(currentIndexForm + 1)}
          />
        )
      default:
        break;
    }
  }

  return (
    <FormBuilderWrapper>
      <StepWrapper>
        {generateFormStep(stepsData[currentIndexForm])}
      </StepWrapper>  
    </FormBuilderWrapper>
  );
}

export default FormBuilder;
