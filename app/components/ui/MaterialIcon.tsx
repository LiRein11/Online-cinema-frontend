import * as MaterialIcons from 'react-icons/md'

import { TypeMaterialIconName } from '@/shared/types/icons.types';
import { FC } from 'react';

const MaterialIcon:FC<{name: TypeMaterialIconName}> = ({name}) => {
  
  const IconComponent= MaterialIcons[name]

  return <IconComponent/> || <MaterialIcons.MdDragIndicator /> 

};

export default MaterialIcon;