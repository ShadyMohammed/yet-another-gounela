import React from 'react';
import { css } from 'styled-components/macro';

const styledSelectOption = css`
  height: 300px;
  width: 300px;
  cursor: pointer;
  transition: ${props => props.theme.transition};
  border: 2px solid ${props => props.theme.errorColor};
  padding: 1rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

const gallery = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const imageBorder = css`
  background: ${({ theme }) => theme.primaryColor};
  padding: 2px;
`;

const SelectOption = ({ src, option, onSelect, isActive, color = 'blue' }) => (
  <div css={styledSelectOption} onClick={() => onSelect(option)}>
    <div css={imageBorder}>
      <img src={option.image} alt="" />
    </div>
    {isActive && <p>Fe eh b2a?</p>}
  </div>
);

const Select = ({ selectOptions, onSelect }) => (
  <div css={gallery}>
    {selectOptions.map(item => (
      <SelectOption
        key={item.id}
        option={item}
        isActive={item.isActive}
        onSelect={onSelect}
        color="pink"
      />
    ))}
  </div>
);

export default Select;
