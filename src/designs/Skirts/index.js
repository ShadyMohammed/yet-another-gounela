import { createFabricImageObj } from '../../utils';
import { fabrics } from '../fabrics';
import skirt1 from './skirt1.jpg';
import skirt2 from './skirt2.jpg';
import skirt3 from './skirt3.jpg';
// import skirt4 from './skirt4.jpg';
import skirt5 from './skirt5.jpg';

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
    name: 'skirt1',
    image: skirt1,
    fabrics: skirt1Fabrics
  },
  {
    name: 'skirt2',
    image: skirt2,
    fabrics: skirt2Fabrics
  },
  {
    name: 'skirt3',
    image: skirt3,
    fabrics: skirt3Fabrics
  },
  // {
  //   name: 'skirt4',
  //   image: skirt4,
  //   fabrics: skirt4Fabrics
  // },
  {
    name: 'A line with long back',
    image: skirt5,
    fabrics: skirt5Fabrics
  }
];
