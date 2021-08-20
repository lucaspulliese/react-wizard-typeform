import React, { useState } from 'react';
import { SectionWrapper, Text } from './styled';

const Section = ({ content }) => {
  return (
    <SectionWrapper>
      {content.map(item => (
        <Text>{item.value}</Text>
      ))}
    </SectionWrapper>
  );
}

export default Section;
