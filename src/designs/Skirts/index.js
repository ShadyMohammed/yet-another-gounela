import { fabrics } from '../fabrics';
import skirt1 from './skirt1.jpg';
import skirt2 from './skirt2.jpg';
import skirt3 from './skirt3.jpg';
// import skirt4 from './skirt4.jpg';
import skirt5 from './skirt5.jpg';
import skirt6 from './skirt6.jpg';
import skirt7 from './skirt7.jpg';

import { skirtNames } from '../../constants';
const {
  fab15,
  fab13,
  fab1,
  fab10,
  fab12,
  fab2,
  fab21,
  fab22,
  fab23,
  fab24,
  fab25,
  fab4,
  fab6,
  fab11,
  fab17
} = fabrics;

const plesyFabrics = [fab1, fab4, fab10];
const pencilFabrics = [
  fab2,
  fab12,
  fab13,
  fab15,
  fab21,
  fab22,
  fab23,
  fab24,
  fab25,
  fab6,
  fab11,
  fab17
];
const aLineFabrics = [
  fab2,
  fab6,
  fab11,
  fab12,
  fab13,
  fab15,
  fab17,
  fab21,
  fab22
];

export const skirts = [
  {
    name: skirtNames.PLESY,
    image: skirt1,
    fabrics: plesyFabrics
  },
  {
    name: skirtNames.PENCIL_PLAIN,
    image: skirt2,
    fabrics: pencilFabrics
  },
  {
    name: skirtNames.PENCIL_WITH_BUTTONS,
    image: skirt3,
    fabrics: pencilFabrics
  },
  // {
  //   name: 'skirt4',
  //   image: skirt4,
  //   fabrics: skirt4Fabrics
  // },
  {
    name: skirtNames.A_LINE_LONG_BACK,
    image: skirt5,
    fabrics: aLineFabrics
  },
  {
    name: skirtNames.A_LINE_PLAIN,
    image: skirt6,
    fabrics: aLineFabrics
  },
  {
    name: skirtNames.A_LINE_BUTTONS,
    image: skirt7,
    fabrics: aLineFabrics
  }
];
