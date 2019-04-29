import React from 'react';
import { css } from 'styled-components/macro';

const styledInputField = css`
  display: flex;
  flex-direction: column-reverse;

  label {
    color: rgba(0, 0, 0, 0.7);
    font-weight: 600;
    transition: ${props => props.theme.transition};
    margin-right: 1rem;
    margin-bottom: 0.5rem;
  }

  input {
    display: inline-block;
    width: 100%;
    padding: 0.5rem;
    font-size: 1.5rem;
    border: none;
    border-radius: 5px;
    transition: ${props => props.theme.transition};

    &:focus {
      outline: none;
      border-color: #ccc;

      & + label {
        color: red;
      }
    }
  }
`;

const inputBorder = css`
  background-image: ${props =>
    props.error
      ? props.theme.inputErrorBorder
      : 'linear-gradient(to right, rgba(238, 205, 163, 0.1) 0%, rgba(239, 98, 159, 0.1) 100%);'};
  padding: 2px;
  border-radius: 5px;
  transition: 1px solid linear;

  &:focus-within {
    background-image: ${props => props.theme.inputBorder};
  }
`;

const labelWrapper = css`
  display: flex;
  justify-content: space-between;

  span {
    font-size: 0.8rem;
  }
`;

const InputField = ({
  label,
  placeholder = '',
  field,
  optional,
  ...inputProps
}) => (
  <div css={styledInputField}>
    <div className="inputWrapper" css={inputBorder}>
      <input placeholder={placeholder} {...field} {...inputProps} />
    </div>
    <div css={labelWrapper}>
      {label && <label htmlFor={field.name}>{label}</label>}
      {optional && <span>اختياري</span>}
    </div>
  </div>
);

export default InputField;
