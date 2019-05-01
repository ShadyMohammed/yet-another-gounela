import React, { createContext, useContext, useReducer, useMemo } from 'react';
import { generate } from 'shortid';
import { images } from '../../designs';

/**
|--------------------------------------------------
| Actions and Actions Creator
|--------------------------------------------------
*/
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

/**
|--------------------------------------------------
| Reducer
|--------------------------------------------------
*/

const { dresses, skirts, blouses } = images;

const initialState = {
  clothesCategory: 'skirts',
  dresses: dresses.map(dress => ({
    ...dress,
    id: generate(),
    isActive: false,
    fabrics: dress.fabrics.map(fabric => ({
      id: generate(),
      isActive: false,
      ...fabric
    }))
  })),
  skirts: skirts.map(skirt => ({
    ...skirt,
    id: generate(),
    isActive: false,
    fabrics: skirt.fabrics.map(fabric => ({
      id: generate(),
      isActive: false,
      ...fabric
    }))
  })),
  blouses: blouses.map(blouse => ({
    ...blouse,
    id: generate(),
    isActive: false,
    fabrics: blouse.fabrics.map(fabric => ({
      id: generate(),
      isActive: false,
      ...fabric
    }))
  }))
};

const designsReducer = (state = initialState, action) => {
  switch (action.type) {
    // case CHOOSE_CLOTHES_CATEGORY:
    //   return { ...state, clothesCategory: action.category };

    case CHOOSE_DESIGN:
      return {
        ...state,
        [state.clothesCategory]: state[state.clothesCategory].map(item =>
          item.id === action.designId
            ? { ...item, isActive: !item.isActive }
            : { ...item, isActive: false }
        )
      };

    case CHOOSE_FABRIC:
      return {
        ...state,
        [state.clothesCategory]: state[state.clothesCategory].map(item =>
          item.isActive
            ? {
                ...item,
                fabrics: item.fabrics.map(fab =>
                  fab.id === action.fabricId
                    ? { ...fab, isActive: !fab.isActive }
                    : { ...fab, isActive: false }
                )
              }
            : item
        )
      };

    default:
      return state;
  }
};

/**
|--------------------------------------------------
| Context
|--------------------------------------------------
*/

const TailorDesignsContext = createContext();

export const useDesignsContext = () => {
  const context = useContext(TailorDesignsContext);
  if (!context)
    throw new Error(
      'useDesignsContext must be used inside TailorDesignsContextProvider'
    );
  return context;
};

export const TailorDesignsContextProvider = props => {
  const [state, dispatch] = useReducer(designsReducer, initialState);
  const value = useMemo(() => [state, dispatch], [state]);
  return <TailorDesignsContext.Provider value={value} {...props} />;
};
