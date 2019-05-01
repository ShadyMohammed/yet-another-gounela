import React from 'react';

import StepLayout from './StepLayout';
import Gallery from './Gallery';
import { clothesCategories } from '../../../designs';

import { useDesignsContext, chooseClothesCategory } from '../designsContext';

const ClothesCategoriesStep = ({ style, setFieldValue }) => {
  const [state, dispatch] = useDesignsContext();
  const isValidStep = state.clothesCategory;
  return (
    <StepLayout
      style={style}
      title="عاوزة تفصلي ايه؟"
      isValidStep={isValidStep}
    >
      <Gallery
        items={clothesCategories}
        onSelect={({ name }) => {
          setFieldValue('clothesType', name);
          dispatch(chooseClothesCategory(name));
        }}
      />
    </StepLayout>
  );
};

export default ClothesCategoriesStep;
