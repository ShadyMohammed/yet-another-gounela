import { combineReducers } from 'redux';
import { generate } from 'shortid';
import {
  CHOOSE_DESIGN,
  CHOOSE_CLOTHES_CATEGORY,
  CHOOSE_FABRIC,
  RESET_ORDER_FORM_REDUCER
} from './actions';
import { images } from '../designs';

const { dresses, skirts, blouses } = images;

export const initialState = {
  clothesCategory: 'skirts',
  dresses: dresses.map(dress => ({
    ...dress,
    id: generate(),
    isActive: false,
    fabrics: dress.fabrics.map(fabric => ({ isActive: false, ...fabric }))
  })),
  skirts: skirts.map(skirt => ({
    ...skirt,
    id: generate(),
    isActive: false,
    fabrics: skirt.fabrics.map(fabric => ({ isActive: false, ...fabric }))
  })),
  blouses: blouses.map(blouse => ({
    ...blouse,
    id: generate(),
    isActive: false,
    fabrics: blouse.fabrics.map(fabric => ({ isActive: false, ...fabric }))
  }))
};

const formReducer = (state = initialState, action) => {
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

    case RESET_ORDER_FORM_REDUCER:
      return initialState;

    default:
      return state;
  }
};

export const rootReducer = combineReducers({ formReducer });
