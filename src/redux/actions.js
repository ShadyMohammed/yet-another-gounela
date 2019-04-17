export const CHOOSE_CLOTHES_CATEGORY = 'CHOOSE_CLOTHES_CATEGORY';
export const CHOOSE_DESIGN = 'CHOOSE_DESIGN';
export const CHOOSE_FABRIC = 'CHOOSE_FABRIC';

export const chooseClothesCategory = category => ({
  type: CHOOSE_CLOTHES_CATEGORY,
  category
});

export const chooseDesign = designId => ({
  type: CHOOSE_DESIGN,
  designId
});

export const chooseFabric = fabricId => ({
  type: CHOOSE_FABRIC,
  fabricId
});
