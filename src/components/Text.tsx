import React from 'react';
import {Text, TextStyle} from 'react-native';
import {fontsSize} from '../constants';

interface TextPropsTypes {
  children: any;
  style?: TextStyle;
  numberOfLines?: number;
}

const CustomText = ({children, style, numberOfLines = 0}: TextPropsTypes) => {
  return (
    <Text
      allowFontScaling={false}
      style={[{fontSize: fontsSize.small}, style]}
      numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
};

export default CustomText;
