import React from 'react';
import { Formik, Form } from 'formik';
import { useTransition } from 'react-spring';
import { Element as ScrollElement } from 'react-scroll';
import { css } from 'styled-components/macro';
import * as Yup from 'yup';

import { usePage } from './context';

const styledForm = css`
  min-height: 100vh;
  background: ${props => props.theme.formBackground};
  position: relative;
`;

const initialValues = {
  height: '',
  weight: '',
  waist: '',
  skirtLength: '',
  hips: '',

  // clothesType: '',
  design: '',
  texture: '',

  name: '',
  email: '',
  phone: '',
  address: ''
};

const validationSchema = Yup.object({
  height: Yup.number()
    .positive('من فضلك دخلي قيمة صحيحة للطول')
    .required('من فضلك دخلي طولك'),
  weight: Yup.number()
    .positive('من فضلك دخلي قيمة صحيحة للوزن')
    .required('من فضلك دخلي وزنك'),
  waist: Yup.number().positive('من فضلك دخلي قيمة صحيحة لمقاس الوسط'),
  skirtLength: Yup.number().positive('من فضلك دخلي قيمة صحيحة لطول الجيبة'),
  hips: Yup.number().positive('من فضلك دخلي قيمة صحيحة لمقاس الأرداف'),

  name: Yup.string().required('من فضلك دخلي إسمك'),
  email: Yup.string().email('من فضلك دخلي ايميل صحيح'),
  phone: Yup.string()
    .length(11, 'من فضلك دخلي رقم هاتف صحيح')
    .required('من فضلك دخلي رقم الهاتف'),
  address: Yup.string().required('من فضلك دخلي العنوان')
});

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const WizardForm = ({ resetOrderFormReducer }) => {
  const { pages, pageNum, setPageNum } = usePage();

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

  const handleSubmit = (values, actions) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'order', ...values })
    })
      .then(() => {
        setPageNum(pageNum + 1);
        actions.resetForm(initialValues);
      })
      .catch(error => alert(error));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      validateOnChange
      render={({ errors, touched, setFieldValue, handleChange }) => {
        return (
          <ScrollElement name="form">
            <Form css={styledForm} name="order" netlify>
              {transitions.map(({ item, props, key }) => {
                const RenderedComponent = pages[item];
                return (
                  <RenderedComponent
                    setFieldValue={setFieldValue}
                    touched={touched}
                    errors={errors}
                    handleChange={handleChange}
                    key={key}
                    style={props}
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
