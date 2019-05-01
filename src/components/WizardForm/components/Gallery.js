import React from 'react';
import { css } from 'styled-components/macro';

import { useDesignsContext } from '../designsContext';

const styledGalleryItem = css`
  padding: 1rem;
  cursor: pointer;
  width: 100%;
  height: 80%;

  transition: ${props => props.theme.fastTransition};
  background: ${({ isActive, theme }) =>
    isActive ? theme.primaryColor : 'transparent'};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;

  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

const descWrapper = css`
  height: 450px;
  width: 300px;
  margin: 0 1rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    word-break: break-all;
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 1.4;
    color: rgba(0, 0, 0, 0.75);
    margin: 0;
    font-family: 'Cairo', sans-serif;
  }

  p:first-of-type {
    padding: 1rem;
  }
`;

const gallery = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-height: 100%;
  overflow: auto;
`;

const GalleryItem = ({ option, onSelect, isActive }) => {
  const [state] = useDesignsContext();
  const activeSkirtDesignName =
    state.skirts.find(skirt => skirt.isActive) &&
    state.skirts.find(skirt => skirt.isActive).name;
  return (
    <div css={descWrapper}>
      <div
        css={styledGalleryItem}
        isActive={isActive}
        onClick={onSelect && (() => onSelect(option))}
      >
        <img src={option.image} alt={option.name} />
      </div>
      <p>{option.name}</p>
      {option.price && (
        <p className="price">{option.price[activeSkirtDesignName]} جنيه</p>
      )}
    </div>
  );
};

const Gallery = ({ items, onSelect, skirts }) => {
  return (
    <div css={gallery}>
      {items.map(item => (
        <GalleryItem
          key={item.id}
          option={item}
          isActive={item.isActive}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};

export default Gallery;
