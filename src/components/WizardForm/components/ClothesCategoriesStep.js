import React from 'react';
import { connect } from 'react-redux';

import StepLayout from './StepLayout';
import Gallery from '../../Gallery';
import { clothesCategories } from '../../../designs';

import { chooseClothesCategory } from '../../../redux/actions';

const ClothesCategoriesStep = ({
  style,
  chooseClothesCategory,
  clothesCategory,
  setFieldValue
}) => {
  const isValidStep = clothesCategory;
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
          chooseClothesCategory(name);
        }}
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
