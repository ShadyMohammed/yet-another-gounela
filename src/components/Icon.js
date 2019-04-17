import React from 'react';

import { ReactComponent as RightArrow } from '../icons/right-arrow.svg';
import { ReactComponent as Facebook } from '../icons/facebook.svg';
import { ReactComponent as Instagram } from '../icons/instagram.svg';

const iconsMap = {
  rightArrow: RightArrow,
  facebook: Facebook,
  instagram: Instagram
};

const Icon = ({ name, color }) => {
  const IconComponent = iconsMap[name];
  if (!IconComponent) throw new Error(`No Svg Icon named ${name} `);

  return (
    <IconComponent style={{ heigth: '100%', width: '100%', fill: color }} />
  );
};

export default Icon;
