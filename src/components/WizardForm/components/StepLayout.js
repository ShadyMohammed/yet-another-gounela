import React from 'react';
import { css } from 'styled-components/macro';
import { animated as Animated } from 'react-spring';
import Button from '../../Button';

const stepLayout = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 5%;
  min-height: 100vh;
`;

const styledTitle = css`
  color: rgba(0, 0, 0, 0.7);
  font-size: 2.5rem;
  margin-bottom: 5%;
`;

const formActions = css`
  width: 100%;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 450px) {
    flex-direction: column;
    padding: 3rem;

    button:first-of-type {
      margin-bottom: 1.5rem;
    }
  }
`;

const StepLayout = ({
  children,
  title,
  style,
  pageNum,
  pagesLength,
  onClick,
  goNext,
  goPrevious,
  isValidStep
}) => (
  <Animated.div css={stepLayout} style={style}>
    <h2 css={styledTitle}>{title}</h2>
    {children}
    <div css={formActions}>
      {pageNum !== 0 && (
        <Button inverted onClick={goPrevious}>
          السابق
        </Button>
      )}
      {pageNum !== pagesLength - 1 && (
        <Button onClick={goNext} disabled={!isValidStep}>
          التالــي
        </Button>
      )}
      {pageNum === pagesLength - 1 && (
        <Button type="submit" disabled={!isValidStep}>
          اطلبي دلوقتي
        </Button>
      )}
    </div>
  </Animated.div>
);

export default StepLayout;
