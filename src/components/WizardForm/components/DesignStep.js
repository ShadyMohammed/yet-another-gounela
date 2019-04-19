import React from 'react';
import { connect } from 'react-redux';
import StepLayout from './StepLayout';
import Gallery from '../../Gallery';

import { chooseDesign } from '../../../redux/actions';

const DesignStep = ({
  onSelectDesign,
  style,
  chooseDesign,
  clothesCategories,
  pageNum,
  pagesLength,
  goNext,
  goPrevious
}) => {
  const isValidStep = !!clothesCategories[
    clothesCategories.clothesCategory
  ].find(cat => cat.isActive);

  return (
    <StepLayout
      style={style}
      title="اختاري التصميم اللي عاجبك"
      pageNum={pageNum}
      pagesLength={pagesLength}
      goNext={goNext}
      goPrevious={goPrevious}
      isValidStep={isValidStep}
    >
      <Gallery
        items={clothesCategories[clothesCategories.clothesCategory]}
        onSelect={({ id }) => chooseDesign(id)}
      />
    </StepLayout>
  );
};

const mapStateToProps = state => ({
  clothesCategories: state.formReducer
});

const mapDispatchToProps = {
  chooseDesign
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DesignStep);
