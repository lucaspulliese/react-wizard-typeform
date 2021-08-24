import React from 'react';
import { CheckboxImage } from 'app/form-builder/form-types';
import { QuestionWrapper, AnswersWrapper, QuestionTitle } from './styled';

const Question = ({ content, title }) => {
  const formType = item => {
    switch (item.type) {
      case 'checkbox-image':
        return (
          <CheckboxImage
            values={item.values}
          />
        )
        break;
      default:
        break;
    }
  }

  return (
    <QuestionWrapper>
      <QuestionTitle>{title}</QuestionTitle>
      <AnswersWrapper>
        {content.map(item => (
          formType(item)
        ))}
      </AnswersWrapper>
    </QuestionWrapper>
  );
}

export default Question;
