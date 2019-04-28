import { fabrics } from '../fabrics';
import blouse1 from './blouse1.jpg';
import blouse2 from './blouse2.png';
import blouse3 from './blouse3.png';

const {
  fab3,
  fab15,
  fab17,
  fab6,
  fab7,
  fab5,
  fab8,
  fab11,
  fab13,
  fab16,
  fab18,
  fab19
} = fabrics;

const blouse1Fabrics = [fab3, fab5, fab8, fab11, fab13, fab16, fab18, fab19];
const blouse2Fabrics = [fab3, fab5, fab8, fab11, fab18, fab19];
const blouse3Fabrics = [
  fab3,
  fab6,
  fab7,
  fab8,
  fab11,
  fab13,
  fab15,
  fab17,
  fab19
];

export const blouses = [
  {
    name: 'blouse1',
    image: blouse1,
    fabrics: blouse1Fabrics
  },
  {
    name: 'blouse1',
    image: blouse2,
    fabrics: blouse2Fabrics
  },
  {
    name: 'blouse1',
    image: blouse3,
    fabrics: blouse3Fabrics
  }
];
