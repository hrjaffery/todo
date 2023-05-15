import React from 'react';
import {Text, StyleProp} from 'react-native';

interface TextPropsTypes {
  children: any;
  style?: StyleProp;
  numberoflines?: number;
}

const CustomText = ({children, style, numberOfLines}: TextPropsTypes) => {
  return <Text>{children}</Text>;
};
export default CustomText;
