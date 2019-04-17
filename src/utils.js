import { generate } from 'shortid';
export const createFabricImageObj = image => ({
  id: generate(),
  name: image.split('media')[1],
  image
});
