import React from 'react';
import { Checkbox } from 'app/form-builder/form-types';
import { QuestionWrapper } from './styled';

const Question = ({ content }) => {
  const formType = item => {
    switch (item.type) {
      case 'checkbox':
        return (
          <Checkbox
          />
        )
        break;
      default:
        break;
    }
  }

  return (
    <QuestionWrapper>
    </QuestionWrapper>
  );
}

export default Question;
