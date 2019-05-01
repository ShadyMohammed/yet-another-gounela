import React from 'react';
import { css } from 'styled-components/macro';
import StepLayout from './StepLayout';
import InputField from '../../InputField';
import FormField from './FormField';
import { skirtNames } from '../../../constants';
import { useDesignsContext } from '../designsContext';

const inputWrapper = css`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const MeasurementsStep = ({ style, touched, errors }) => {
  const [state] = useDesignsContext();
  const activeSkirt = state.skirts.find(skirt => skirt.isActive);
  const isValidStep =
    touched.height && touched.weight && !errors.height && !errors.weight;

  return (
    <StepLayout
      style={style}
      title="اكتبي وزنك وطولك"
      isValidStep={isValidStep}
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
          label="محيط الوسط"
          optional
          component={InputField}
        />
        <FormField
          name="skirtLength"
          type="number"
          label="طول الجيبة"
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

export default MeasurementsStep;
