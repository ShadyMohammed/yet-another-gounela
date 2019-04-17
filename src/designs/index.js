import { generate } from 'shortid';
import { blouses } from './Blouses';
import { dresses } from './Dresses';
import { skirts } from './Skirts';
import blouse from './Blouses/blouse1.jpg';
import dress from './Dresses/dress1.jpg';
import skirt from './Skirts/skirt5.jpg';

export const images = { blouses, dresses, skirts };
export const clothesCategories = [
  {
    id: generate(),
    name: 'blouses',
    image: blouse
  },
  {
    id: generate(),
    name: 'dresses',
    image: dress
  },
  {
    id: generate(),
    name: 'skirts',
    image: skirt
  }
];
