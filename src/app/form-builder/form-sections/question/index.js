import React from 'react';
import { RadioImage, Checkbox, Select, InputText } from 'app/form-builder/form-types';
import { QuestionWrapper, AnswersWrapper, QuestionTitle, ArrowsWrapper, ArrowsButton } from './styled';

const Question = ({ 
  content, 
  title, 
  control,
  register,
  setValue,
  getValues,
  questionId, 
  onPrevStep,
  onNextStep 
}) => {

  const formType = item => {
    switch (item.type) {
      case 'radio-image':
        return (
          <RadioImage
            control={control}
            getValues={getValues}
            setValue={setValue}
            questionId={questionId}
            values={item.values}
          />
        )
      case 'checkbox':
        return (
          <Checkbox
            control={control}
            getValues={getValues}
            setValue={setValue}
            questionId={questionId}
            values={item.values}
          />
        )
      case 'select':
        return (
          <Select
            control={control}
            getValues={getValues}
            setValue={setValue}
            questionId={questionId}
            values={item.values}
          />
        )
      case 'input':
        return (
          <InputText
            register={register}
            questionId={questionId}
            placeholder={item.placeholder}
          />
        )
      default:
        break;
    }
  }

  return (
    <QuestionWrapper>
      <QuestionTitle>{title}</QuestionTitle>
      <AnswersWrapper>
        {content.map((item, index) => (
          <div key={index}>
            {formType(item)}
          </div>
        ))}

        <ArrowsWrapper>
          <ArrowsButton onClick={onPrevStep}>
            <svg height="9" width="14">
              <path d="M11.996 8.121l1.414-1.414L6.705 0 0 6.707l1.414 1.414 5.291-5.293z"></path>
            </svg>
          </ArrowsButton>
          <ArrowsButton onClick={onNextStep}>
            <svg height="9" width="14">
              <path d="M12.293.293l1.414 1.414L7 8.414.293 1.707 1.707.293 7 5.586z"></path>
            </svg>
          </ArrowsButton>
        </ArrowsWrapper>
      </AnswersWrapper>
    </QuestionWrapper>
  );
}

export default Question;
