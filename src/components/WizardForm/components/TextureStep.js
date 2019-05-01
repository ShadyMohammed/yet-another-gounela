import React from 'react';
import { connect } from 'react-redux';
import Gallery from '../../Gallery';
import StepLayout from './StepLayout';
import { chooseFabric } from '../../../redux/actions';

const TextureStep = ({ style, form, chooseFabric, setFieldValue }) => {
  const fabrics = form[form.clothesCategory].find(design => design.isActive)
    .fabrics;

  const isValidStep = !!fabrics.find(fab => fab.isActive);
  return (
    <StepLayout style={style} title="اختاري القماش" isValidStep={isValidStep}>
      <Gallery
        items={fabrics}
        onSelect={({ id, name }) => {
          chooseFabric(id);
          setFieldValue('texture', name);
        }}
      />
    </StepLayout>
  );
};

const mapStateToProps = state => ({
  form: state.formReducer
});

const mapDispatchToProps = {
  chooseFabric
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextureStep);
