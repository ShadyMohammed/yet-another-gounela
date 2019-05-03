import React, { createContext, useState, useContext, useMemo } from 'react';
import MeasurementsStep from './components/MeasurementsStep';
import DesignStep from './components/DesignStep';
import AddressStep from './components/AddressStep';
// import ClothesCategoriesStep from './components/ClothesCategoriesStep';
import TextureStep from './components/TextureStep';
import ConfirmationStep from './components/ConfirmationStep';

const PageContext = createContext();

export const usePage = () => {
  const pages = [
    // ClothesCategoriesStep,
    DesignStep,
    TextureStep,
    MeasurementsStep,
    AddressStep,
    ConfirmationStep
  ];
  const context = useContext(PageContext);
  if (!context) throw new Error('usePage must be used inside PageProvider');

  const [pageNum, setPageNum] = context;
  return { pages, pageNum, setPageNum };
};

export const PageProvider = props => {
  const [pageNum, setPageNum] = useState(0);
  const value = useMemo(() => [pageNum, setPageNum], [pageNum]);
  return <PageContext.Provider value={value} {...props} />;
};
