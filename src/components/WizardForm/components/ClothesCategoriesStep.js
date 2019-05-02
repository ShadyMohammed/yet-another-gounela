import React from 'react';

import StepLayout from './StepLayout';
import Gallery from './Gallery';
import { clothesCategories } from '../../../designs';

import { useDesignsContext, chooseClothesCategory } from '../designsContext';
import { usePage } from '../context';

const ClothesCategoriesStep = ({ style, setFieldValue }) => {
  const [state, dispatch] = useDesignsContext();
  const { pageNum, setPageNum } = usePage();
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
          dispatch(chooseClothesCategory(name));
          setFieldValue('clothesType', name);
          setPageNum(pageNum + 1);
        }}
      />
    </StepLayout>
  );
};

export default ClothesCategoriesStep;
