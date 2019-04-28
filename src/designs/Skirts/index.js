import { fabrics } from '../fabrics';
import skirt1 from './skirt1.jpg';
import skirt2 from './skirt2.jpg';
import skirt3 from './skirt3.jpg';
// import skirt4 from './skirt4.jpg';
import skirt5 from './skirt5.jpg';
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
  fab9
} = fabrics;

const skirt1Fabrics = [fab1, fab4, fab10];
const skirt2Fabrics = [
  fab2,
  fab9,
  fab12,
  fab13,
  fab15,
  fab21,
  fab22,
  fab23,
  fab24,
  fab25
];
const skirt3Fabrics = [fab12, fab15, fab21, fab23, fab24, fab25];
// const skirt4Fabrics = [fab21, fab22, fab23];
const skirt5Fabrics = [fab2, fab12, fab15, fab21, fab22];

export const skirts = [
  {
    name: skirtNames.PLESY,
    image: skirt1,
    fabrics: skirt1Fabrics
  },
  {
    name: skirtNames.PENCIL_PLAIN,
    image: skirt2,
    fabrics: skirt2Fabrics
  },
  {
    name: skirtNames.PENCIL_WITH_BUTTONS,
    image: skirt3,
    fabrics: skirt3Fabrics
  },
  // {
  //   name: 'skirt4',
  //   image: skirt4,
  //   fabrics: skirt4Fabrics
  // },
  {
    name: skirtNames.A_LINE_LONG_BACK,
    image: skirt5,
    fabrics: skirt5Fabrics
  }
];
