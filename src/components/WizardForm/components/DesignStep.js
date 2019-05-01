import React from 'react';
import StepLayout from './StepLayout';
import Gallery from '../../Gallery';

import { chooseDesign } from '../../../redux/actions';
import { useDesignsContext } from '../designsContext';

const DesignStep = ({ style, clothesCategories, setFieldValue }) => {
  const [state, dispatch] = useDesignsContext();
  const isValidStep = !!state[state.clothesCategory].find(cat => cat.isActive);

  return (
    <StepLayout
      style={style}
      title="اختاري استايل الجيبة اللي عاجباكي"
      isValidStep={isValidStep}
    >
      <Gallery
        items={state[state.clothesCategory]}
        onSelect={({ id, name }) => {
          dispatch(chooseDesign(id));
          setFieldValue('design', name);
        }}
      />
    </StepLayout>
  );
};

export default DesignStep;
