import React from 'react';
import {Text, TextStyle} from 'react-native';

interface TextPropsTypes {
  children: any;
  style?: TextStyle;
  numberOfLines?: number;
}

const CustomText = ({children, style, numberOfLines = 0}: TextPropsTypes) => {
  return (
    <Text style={style} numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
};

export default CustomText;
