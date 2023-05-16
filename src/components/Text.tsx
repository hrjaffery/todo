import React from 'react';
import {Text, TextStyle} from 'react-native';

interface TextPropsTypes {
  children: any;
  style?: TextStyle;
  numberOfLines?: number;
}

const CustomText = ({children, style, numberOfLines}: TextPropsTypes) => {
  return <Text>{children}</Text>;
};

export default CustomText;
