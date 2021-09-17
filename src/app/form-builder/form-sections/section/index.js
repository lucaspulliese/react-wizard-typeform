import React from 'react';
import { SectionWrapper, Text } from './styled';
import { ButtonComp } from 'app/form-builder/form-components';

const Section = ({ content, onNextStep, hideNextButton }) => {
  return (
    <SectionWrapper>
      {content.map((item, index) => (
        <Text key={index}>{item.value}</Text>
      ))}

      {!hideNextButton &&
        <ButtonComp onClick={onNextStep}>Sure</ButtonComp>
      }
    </SectionWrapper>
  );
}

export default Section;
