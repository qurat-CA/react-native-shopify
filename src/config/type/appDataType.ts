import React = require('react');
import {ViewStyle} from 'react-native';

export type FlexProps = {
  mT?: number;
  mB?: number;
  children: React.ReactNode;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?:
    | 'stretch'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'baseline'
    | 'stretch';
  gap?: number;
  flexWrap?: 'wrap' | 'nowrap';
  style?: ViewStyle;
};
