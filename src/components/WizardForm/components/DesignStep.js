import React, { useEffect } from 'react';
import StepLayout from './StepLayout';
import Gallery from './Gallery';

import { useDesignsContext, chooseDesign } from '../designsContext';
import { usePage } from '../context';

const DesignStep = ({ style, clothesCategories, setFieldValue }) => {
  const { pageNum, setPageNum } = usePage();
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
          setPageNum(pageNum + 1);
        }}
      />
    </StepLayout>
  );
};

export default DesignStep;
