import React from 'react';
import { css } from 'styled-components/macro';
import { animated as Animated } from 'react-spring';
import { Link, Element } from 'react-scroll';
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

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
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
  goToFirstStep,
  goNext,
  goPrevious,
  isValidStep
}) => (
  <Element name="stepStart">
    <Animated.div css={stepLayout} style={style}>
      <h2 css={styledTitle}>{title}</h2>
      {children}
      <div css={formActions}>
        {pageNum !== 0 && pageNum < pagesLength - 1 && (
          <Link to="stepStart">
            <Button inverted onClick={goPrevious}>
              السابق
            </Button>
          </Link>
        )}
        {pageNum < pagesLength - 2 && (
          <Link to="stepStart">
            <Button onClick={goNext} disabled={!isValidStep}>
              التالي
            </Button>
          </Link>
        )}
        {pageNum === pagesLength - 2 && (
          <Button type="submit" disabled={!isValidStep}>
            اطلبي دلوقتي
          </Button>
        )}
        {pageNum === pagesLength - 1 && (
          <Link to="stepStart">
            <Button
              type="submit"
              disabled={!isValidStep}
              onClick={goToFirstStep}
            >
              عودة للصفحة الرئيسية
            </Button>
          </Link>
        )}
      </div>
    </Animated.div>
  </Element>
);

export default StepLayout;
