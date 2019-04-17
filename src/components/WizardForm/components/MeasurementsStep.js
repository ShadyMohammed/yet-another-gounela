import React from 'react';
import { css } from 'styled-components/macro';
import StepLayout from './StepLayout';
import InputField from '../../InputField';
import FormField from './FormField';

const inputWrapper = css`
  display: flex;
  justify-content: center;
`;

const MeasurementsStep = ({
  style,
  touched,
  errors,
  handleChange,
  setIsValidStep,
  goNext,
  goPrevious,
  pageNum,
  pageLength
}) => {
  const isValidStep =
    touched.height && touched.weight && !errors.height && !errors.weight;

  return (
    <StepLayout
      style={style}
      title="اكتبي وزنك وطولك"
      goNext={goNext}
      goPrevious={goPrevious}
      isValidStep={isValidStep}
      pageNum={pageNum}
      pagesLength={pageLength}
    >
      <div css={inputWrapper}>
        <FormField
          name="height"
          type="number"
          label="الطول"
          component={InputField}
        />
        <FormField
          name="weight"
          type="number"
          label="الوزن"
          component={InputField}
        />
      </div>
    </StepLayout>
  );
};

export default MeasurementsStep;
