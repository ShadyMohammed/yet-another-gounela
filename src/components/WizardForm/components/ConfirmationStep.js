import React from 'react';
import { connect } from 'react-redux';
import { css } from 'styled-components/macro';

import StepLayout from './StepLayout';

const confirmationWrapper = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const orderSummary = css`
  width: 40%;
  padding: 2rem;

  p {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 3rem;

    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }

    @media screen and (max-width: 500px) {
      font-size: 1rem;
    }

    span {
      font-weight: 500;
      color: rgba(0, 0, 0, 0.75);
      display: inline-block;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const imgWrapper = css`
  width: 33%;
  max-height: 550px;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    max-height: none;
  }
`;

const ConfirmationStep = ({
  skirts,
  style,
  pageNum,
  pagesLength,
  goToFirstStep
}) => {
  const orderedItem = skirts.find(skirt => skirt.isActive);
  return (
    <StepLayout
      style={style}
      title="ملخص الأوردر"
      pageNum={pageNum}
      pagesLength={pagesLength}
      goToFirstStep={goToFirstStep}
      isValidStep
    >
      <div css={confirmationWrapper}>
        <div css={orderSummary}>
          <p>
            الموديل: <span>Bla</span>
          </p>
          <p>
            القماش: <span>Bla</span>
          </p>
          <p>
            السعر: <span>Bla</span>
          </p>
        </div>
        <div css={imgWrapper}>
          <img src={orderedItem.image} alt={orderedItem.name} />
        </div>
      </div>
    </StepLayout>
  );
};

const mapStateToProps = state => ({
  skirts: state.formReducer.skirts
});

export default connect(mapStateToProps)(ConfirmationStep);
