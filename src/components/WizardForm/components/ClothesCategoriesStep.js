import React from 'react';
import { connect } from 'react-redux';

import StepLayout from './StepLayout';
import Select from '../../Select';
import { clothesCategories } from '../../../designs';

import { chooseClothesCategory } from '../../../redux/actions';

const ClothesCategoriesStep = ({
  style,
  chooseClothesCategory,
  clothesCategory,
  pageNum,
  pagesLength,
  goNext,
  goPrevious
}) => {
  const isValidStep = clothesCategory;
  return (
    <StepLayout
      style={style}
      title="عاوزة تفصلي ايه؟"
      pageNum={pageNum}
      pagesLength={pagesLength}
      goNext={goNext}
      goPrevious={goPrevious}
      isValidStep={isValidStep}
    >
      <Select
        selectOptions={clothesCategories}
        onSelect={({ name }) => chooseClothesCategory(name)}
      />
    </StepLayout>
  );
};

const mapStateToProps = state => ({
  clothesCategory: state.formReducer.clothesCategory
});

const mapDispatchToProps = {
  chooseClothesCategory
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClothesCategoriesStep);
