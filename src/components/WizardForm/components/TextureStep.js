import React from 'react';
import Gallery from './Gallery';
import StepLayout from './StepLayout';

import { useDesignsContext, chooseFabric } from '../designsContext';
import { usePage } from '../context';

const TextureStep = ({ style, setFieldValue }) => {
  const [state, dispatch] = useDesignsContext();
  const { pageNum, setPageNum } = usePage();
  const fabrics = state[state.clothesCategory].find(design => design.isActive)
    .fabrics;

  const isValidStep = !!fabrics.find(fab => fab.isActive);
  return (
    <StepLayout style={style} title="اختاري القماش" isValidStep={isValidStep}>
      <Gallery
        items={fabrics}
        onSelect={({ id, name }) => {
          dispatch(chooseFabric(id));
          setFieldValue('texture', name);
          setPageNum(pageNum + 1);
        }}
      />
    </StepLayout>
  );
};

export default TextureStep;
