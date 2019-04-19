import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { useTransition } from 'react-spring';
import { Element as ScrollElement } from 'react-scroll';
import { css } from 'styled-components/macro';
import * as Yup from 'yup';

import MeasurementsStep from './components/MeasurementsStep';
import DesignStep from './components/DesignStep';
import AddressStep from './components/AddressStep';
import ClothesCategoriesStep from './components/ClothesCategoriesStep';
import TextureStep from './components/TextureStep';

const styledForm = css`
  min-height: 100vh;
  background: ${props => props.theme.formBackground};
  position: relative;
`;

const initialValues = {
  height: '',
  weight: '',

  clothesType: '',
  design: '',
  texture: '',

  name: '',
  email: '',
  phone: '',
  governorate: '',
  city: '',
  street: '',
  building: '',
  floor: ''
};

const validationSchema = Yup.object({
  height: Yup.number()
    .positive('من فضلك دخلي قيمة صحيحة للطول')
    .required('من فضلك دخلي طولك'),
  weight: Yup.number()
    .positive('من فضلك دخلي قيمة صحيحة للوزن')
    .required('من فضلك دخلي وزنك'),

  name: Yup.string().required('من فضلك دخلي إسمك'),
  email: Yup.string()
    .required('من فضلك دخلي ايميلك')
    .email('من فضلك دخلي ايميل صحيح'),
  phone: Yup.string()
    .length(11, 'من فضلك دخلي رقم هاتف صحيح')
    .required('من فضلك دخلي رقم الهاتف'),
  governorate: Yup.string().required('من فضلك دخلي المحافظة'),
  city: Yup.string().required('من فضلك دخلي المنطقة'),
  street: Yup.string().required('من فضلك دخلي اسم الشارع'),
  building: Yup.number()
    .positive('من فضلك دخلي رقم مبنى صحيح')
    .required('من فضلك دخلي رقم المبنى'),
  floor: Yup.number()
    .positive('من فضلك دخلي رقم شقة صحيح')
    .required('من فضلك دخلي رقم الشقة')
});

const pages = [
  ClothesCategoriesStep,
  DesignStep,
  TextureStep,
  MeasurementsStep,
  AddressStep
];

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const handleSubmit = (values, actions) => {
  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({ 'form-name': 'order', ...values })
  })
    .then(() => {
      actions.resetForm(initialValues);
      alert('Success!');
    })
    .catch(error => alert(error));
};

const WizardForm = () => {
  const [pageNum, setPageNum] = useState(0);

  const goNext = () => setPageNum(pageNum + 1);
  const goPrevious = () => setPageNum(pageNum - 1);

  const transitions = useTransition(pageNum, p => p, {
    from: {
      opacity: 0,
      width: '0%',
      transform: 'translate3d(100%,0,0)',
      position: 'absolute'
    },
    enter: {
      opacity: 1,
      width: '100%',
      transform: 'translate3d(0%,0,0)',
      position: 'relative'
    },
    leave: {
      opacity: 0,
      width: '0%',
      transform: 'translate3d(-50%,0,0)',
      position: 'absolute'
    }
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      render={({
        errors,
        status,
        touched,
        dirty,
        isSubmitting,
        setFieldValue,
        handleChange
      }) => {
        return (
          <ScrollElement name="form">
            <Form css={styledForm} name="order" netlify>
              {transitions.map(({ item, props, key }) => {
                const RenderedComponent = pages[item];
                return (
                  <RenderedComponent
                    setFieldValue={setFieldValue}
                    touched={touched}
                    dirty={dirty}
                    errors={errors}
                    handleChange={handleChange}
                    key={key}
                    style={props}
                    pageNum={pageNum}
                    pagesLength={pages.length}
                    goNext={goNext}
                    goPrevious={goPrevious}
                  />
                );
              })}
            </Form>
          </ScrollElement>
        );
      }}
    />
  );
};

export default WizardForm;
