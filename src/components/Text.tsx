import React from 'react';
import {Text, ViewStyle} from 'react-native';

interface TextPropsTypes {
  children: any;
  style?: ViewStyle;
  numberOfLines?: number;
}

const CustomText = ({children, style, numberOfLines}: TextPropsTypes) => {
  return <Text>{children}</Text>;
};
export default CustomText;
