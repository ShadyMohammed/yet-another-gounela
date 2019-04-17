import React from 'react';
import { css } from 'styled-components/macro';

const styledButton = css`
  color: ${props => (props.inverted ? props.theme.primaryColor : '#fff')};
  border: none;
  border-radius: 5px;
  background: ${props => (props.inverted ? '#fff' : props.theme.primaryBtn)};
  cursor: pointer;

  padding: 1.2rem 3.5rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  transition: ${props => props.theme.fastTransition};
  font-size: 1.2rem;
  font-weight: 600;

  &:hover {
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.4);
    background-position: right center;
  }

  &:disabled {
    color: #ccc;
    background: #eee;
    box-shadow: none;
    cursor: not-allowed;
  }

  &:active,
  &:focus {
    outline: none;
  }
`;

const Button = ({
  children,
  type = 'button',
  leftICon,
  rightIcon,
  ...restProps
}) => {
  return (
    <button type={type} css={styledButton} {...restProps}>
      {leftICon && <span>{leftICon}</span>}
      {children}
      {rightIcon && <span>{rightIcon}</span>}
    </button>
  );
};

export default Button;
