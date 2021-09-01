import React from 'react';
import { RadioImage } from 'app/form-builder/form-types';
import { QuestionWrapper, AnswersWrapper, QuestionTitle } from './styled';

const Question = ({ content, title, questionId }) => {
  const formType = item => {
    switch (item.type) {
      case 'radio-image':
        return (
          <RadioImage
            questionId={questionId}
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
