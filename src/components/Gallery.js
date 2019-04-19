import React from 'react';
import { css } from 'styled-components/macro';

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

const decWrapper = css`
  height: 450px;
  width: 300px;
  margin: 0 1rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    word-break: break-all;
    padding: 1rem;
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 1.4;
    color: rgba(0, 0, 0, 0.75);
    margin: 0;
    font-family: 'Cairo', sans-serif;
  }
`;

const gallery = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-height: 100%;
  overflow: auto;
`;

const GalleryItem = ({ src, option, onSelect, isActive, color }) => (
  <div css={decWrapper}>
    <div
      css={styledGalleryItem}
      isActive={isActive}
      onClick={() => onSelect(option)}
    >
      <img src={option.image} alt={option.name} />
    </div>
    <p>الوصف</p>
  </div>
);

const Gallery = ({ items, onSelect }) => (
  <div css={gallery}>
    {items.map(item => (
      <GalleryItem
        key={item.id}
        option={item}
        isActive={item.isActive}
        onSelect={onSelect}
        color="pink"
      />
    ))}
  </div>
);

export default Gallery;
