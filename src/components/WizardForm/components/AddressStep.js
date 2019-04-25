import React from 'react';
import { css } from 'styled-components/macro';

import InputField from '../../InputField';
import FormField from './FormField';
import StepLayout from './StepLayout';

const fieldsWrapper = css`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 80%;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const AddressStep = ({
  style,
  pageNum,
  pagesLength,
  goPrevious,
  errors,
  touched,
  dirty
}) => {
  const isValidStep =
    touched.name &&
    touched.email &&
    touched.phone &&
    touched.governorate &&
    touched.city &&
    touched.street &&
    touched.building &&
    touched.floor &&
    !errors.name &&
    !errors.email &&
    !errors.phone &&
    !errors.governorate &&
    !errors.city &&
    !errors.street &&
    !errors.building &&
    !errors.floor;

  return (
    <StepLayout
      style={style}
      title="دخلي بياناتك"
      pageNum={pageNum}
      pagesLength={pagesLength}
      goPrevious={goPrevious}
      isValidStep={isValidStep}
    >
      <div css={fieldsWrapper}>
        <FormField name="name" label="االإسم" component={InputField} />
        <FormField
          name="email"
          label="الإيميل"
          type="email"
          component={InputField}
        />
        <FormField name="phone" label="الموبايل" component={InputField} />
        <FormField name="governorate" label="المحافظة" component={InputField} />
        <FormField name="city" label="المدينة" component={InputField} />
        <FormField name="street" label="الشارع" component={InputField} />
        <FormField
          name="building"
          label="رقم المبنى"
          type="number"
          component={InputField}
        />
        <FormField
          name="floor"
          label="الدور"
          type="number"
          component={InputField}
        />
      </div>
    </StepLayout>
  );
};

export default AddressStep;
