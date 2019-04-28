import { createFabricImageObj } from '../../utils';
import { fabrics } from '../fabrics/index';
import dress1 from './dress1.jpg';
import dress2 from './dress2.jpg';
import dress3 from './dress3.jpg';
import dress4 from './dress4.jpg';
import dress5 from './dress5.jpg';
import dress6 from './dress6.jpg';

const {
  fab15,
  fab6,
  fab11,
  fab13,
  fab12,
  fab14,
  fab2,
  fab20,
  fab21,
  fab22
} = fabrics;

const dress1Fabrics = [fab12, fab21, fab22];
const dress2Fabrics = [fab12, fab21, fab22];
const dress3Fabrics = [fab2, fab15, fab12, fab21, fab22];
const dress4Fabrics = [fab2, fab11, fab12, fab14, fab15, fab20, fab21, fab22];
const dress5Fabrics = [fab2, fab12, fab15, fab21, fab22];
const dress6Fabrics = [fab6, fab11, fab12, fab13, fab15, fab20, fab21, fab22];

export const dresses = [
  {
    name: 'dress1',
    image: dress1,
    fabrics: dress1Fabrics
  },
  {
    name: 'dress2',
    image: dress2,
    fabrics: dress2Fabrics
  },
  {
    name: 'dress3',
    image: dress3,
    fabrics: dress3Fabrics
  },
  {
    name: 'dress4',
    image: dress4,
    fabrics: dress4Fabrics
  },
  {
    name: 'dress5',
    image: dress5,
    fabrics: dress5Fabrics
  },
  {
    name: 'dress6',
    image: dress6,
    fabrics: dress6Fabrics
  }
];
