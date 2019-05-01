import React from 'react';
import { connect } from 'react-redux';
import StepLayout from './StepLayout';
import Gallery from '../../Gallery';

import { chooseDesign } from '../../../redux/actions';

const DesignStep = ({
  style,
  chooseDesign,
  clothesCategories,
  setFieldValue
}) => {
  const isValidStep = !!clothesCategories[
    clothesCategories.clothesCategory
  ].find(cat => cat.isActive);

  return (
    <StepLayout
      style={style}
      title="اختاري استايل الجيبة اللي عاجباكي"
      isValidStep={isValidStep}
    >
      <Gallery
        items={clothesCategories[clothesCategories.clothesCategory]}
        onSelect={({ id, name }) => {
          chooseDesign(id);
          setFieldValue('design', name);
        }}
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
