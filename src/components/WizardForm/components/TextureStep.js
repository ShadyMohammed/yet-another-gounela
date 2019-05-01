import React from 'react';
import Gallery from '../../Gallery';
import StepLayout from './StepLayout';

import { chooseFabric } from '../../../redux/actions';
import { useDesignsContext } from '../designsContext';

const TextureStep = ({ style, setFieldValue }) => {
  const [state, dispatch] = useDesignsContext();
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
        }}
      />
    </StepLayout>
  );
};

export default TextureStep;
