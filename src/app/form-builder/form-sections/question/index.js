import React from 'react';
import { RadioImage, Checkbox, Select, InputText } from 'app/form-builder/form-types';
import { QuestionWrapper, AnswersWrapper, QuestionTitle } from './styled';

const Question = ({ 
  content, 
  title, 
  control,
  register,
  setValue,
  getValues,
  questionId, 
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
      </AnswersWrapper>
    </QuestionWrapper>
  );
}

export default Question;
