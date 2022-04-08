import React, { useState, useEffect } from 'react';
import stepsData from 'app/utils/stepsData';
import { FormBuilderWrapper, StepWrapper, ArrowsWrapper, ArrowsButton } from './styled';
import { Section, Question } from './form-sections';
import { useForm } from "react-hook-form";
import { SwitchTransition, CSSTransition } from "react-transition-group";

const FormBuilder = () => {
  const { register, control, reset, setValue, getValues } = useForm();
  const [currentIndexForm, setCurrentIndexForm] = useState(0);
  const [classNameState, setClassNameState] = useState('fade');

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

  const setNewCurrentIndexForm = (newIndex) => {
    newIndex > currentIndexForm ? setClassNameState('fade') : setClassNameState('fade-out');

    setTimeout(() => {
      setCurrentIndexForm(newIndex);
    }, 50)
  }

  const generateFormStep = (step) => {
    switch (step.type) {
      case 'section':
        return (
          <Section
            hideNextButton={step.hide_next_button}
            content={step.content}
            onNextStep={() => setNewCurrentIndexForm(currentIndexForm + 1)}
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
          />
        )
      default:
        break;
    }
  }

  return (
    <FormBuilderWrapper>
      <StepWrapper>
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={currentIndexForm}
            addEndListener={(node, done) => {
              node.addEventListener("transitionend", done, false);
            }}
            classNames={classNameState}
          >
            {generateFormStep(stepsData[currentIndexForm])}
          </CSSTransition>
        </SwitchTransition>
      </StepWrapper>  
      
      <ArrowsWrapper show={stepsData[currentIndexForm].type === 'question'}>
        <ArrowsButton onClick={() => setNewCurrentIndexForm(currentIndexForm - 1)}>
          <svg height="9" width="14">
            <path d="M11.996 8.121l1.414-1.414L6.705 0 0 6.707l1.414 1.414 5.291-5.293z"></path>
          </svg>
        </ArrowsButton>
        <ArrowsButton onClick={() => setNewCurrentIndexForm(currentIndexForm + 1)}>
          <svg height="9" width="14">
            <path d="M12.293.293l1.414 1.414L7 8.414.293 1.707 1.707.293 7 5.586z"></path>
          </svg>
        </ArrowsButton>
      </ArrowsWrapper>
    </FormBuilderWrapper>
  );
}

export default FormBuilder;
