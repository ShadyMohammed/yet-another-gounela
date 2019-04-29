import React from 'react';
import { connect } from 'react-redux';
import { css } from 'styled-components/macro';
import StepLayout from './StepLayout';
import InputField from '../../InputField';
import FormField from './FormField';
import { skirtNames } from '../../../constants';

const inputWrapper = css`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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
  pagesLength,
  activeSkirt
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
      pagesLength={pagesLength}
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
        <FormField
          name="waist"
          type="number"
          label="مقاس الوسط"
          optional
          component={InputField}
        />
        <FormField
          name="skirtLength"
          type="number"
          label="مقاس الجيبة"
          optional
          component={InputField}
        />
        {(activeSkirt.name === skirtNames.PENCIL_PLAIN ||
          activeSkirt.name === skirtNames.PENCIL_WITH_BUTTONS) && (
          <FormField
            name="hips"
            type="number"
            label="محيط الأرداف"
            optional
            component={InputField}
          />
        )}
      </div>
    </StepLayout>
  );
};

const mapStateToProps = state => ({
  activeSkirt: state.formReducer.skirts.find(skirt => skirt.isActive)
});

export default connect(mapStateToProps)(MeasurementsStep);
