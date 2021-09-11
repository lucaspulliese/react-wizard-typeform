import styled from 'styled-components/macro';

export const QuestionWrapper = styled.section`
  width: 720px;
  margin: 0 auto;
`

export const QuestionTitle = styled.h3`
  font-size: 24px;
  line-height: 32px;
  color: #FFF;
  text-align: left;
`

export const AnswersWrapper = styled.div`
  margin-top: 32px;
`

export const ArrowsWrapper = styled.div`
  display: flex;
  position: fixed;
  right: 25px;
  bottom: 25px;
`

export const ArrowsButton = styled.button`
  width: 36px;
  min-width: 36px;
  height: 32px;
  background: #FFF;
  border: none;
  outline: none,
  display: flex;
  border-radius: 0 4px 4px 0;
  align-items: center;
  justify-content: center;
  &:first-of-type {
    border-radius: 4px 0 0 4px;
    border-right: 1px solid rgba(128, 128, 128, 0.3);
  }
`