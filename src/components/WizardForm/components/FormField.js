import React from 'react';
import { css } from 'styled-components/macro';
import { Field, ErrorMessage } from 'formik';

const formFieldStyle = css`
  flex-grow: 1;
  min-width: 40%;

  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

const errorMessage = css`
  color: ${props => props.theme.errorColor};
  font-size: ${props => props.theme.smallFont};
`;

const FormField = ({ name, label, type, component, ...rest }) => {
  return (
    <div css={formFieldStyle}>
      <Field
        name={name}
        label={label}
        type={type}
        // placeholder={label}
        component={component}
        // {...rest}
      />
      <ErrorMessage name={name}>
        {message => <span css={errorMessage}>{message}</span>}
      </ErrorMessage>
    </div>
  );
};

export default FormField;
