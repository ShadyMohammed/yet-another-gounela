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

const AddressStep = ({ style, errors, touched }) => {
  const isValidStep =
    touched.name &&
    touched.email &&
    touched.phone &&
    touched.address &&
    !errors.name &&
    !errors.email &&
    !errors.phone &&
    !errors.address;

  return (
    <StepLayout style={style} title="دخلي بياناتك" isValidStep={isValidStep}>
      <div css={fieldsWrapper}>
        <FormField name="name" label="االإسم" component={InputField} />
        <FormField
          name="email"
          label="الإيميل"
          type="email"
          component={InputField}
        />
        <FormField name="phone" label="الموبايل" component={InputField} />
        <FormField name="address" label="العنوان" component={InputField} />
      </div>
    </StepLayout>
  );
};

export default AddressStep;
