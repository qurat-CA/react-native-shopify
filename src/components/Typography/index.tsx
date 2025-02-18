import React from 'react';
import {Text, TextStyle, TextProps} from 'react-native';
import {Colors, Metrix} from '../../config';
import fonts from '../../config/fonts';

interface TypographyProps extends TextProps {
  color?: string;
  size?: number;
  pT?: number;
  pB?: number;
  pR?: number;
  pL?: number;
  mT?: number;
  mB?: number;
  mL?: number;
  mR?: number;
  extraLight?: boolean;
  light?: boolean;
  medium?: boolean;
  semiBold?: boolean;
  bold?: boolean;
  extraBold?: boolean;
  upperCase?: boolean;
  capitalize?: boolean;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  text?: string;
  numberOfLines?: number;
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip';
  lineHeight?: number;
  children?: React.ReactNode;
  letterSpacing?: number;
  style?: TextStyle;
  textDecoration?: 'underline' | 'line-through' | 'none';
}

const Typography: React.FC<TypographyProps> = ({
  color = Colors.text,
  size = 16,
  pT = 0,
  pB = 0,
  pR = 0,
  pL = 0,
  mT = 0,
  mB = 0,
  mL = 0,
  mR = 0,
  extraLight = false,
  light = false,
  medium = false,
  semiBold = false,
  bold = false,
  extraBold = false,
  upperCase = false,
  capitalize = false,
  textAlign = 'left',
  text,
  numberOfLines,
  ellipsizeMode = 'tail',
  lineHeight,
  children,
  letterSpacing,
  textDecoration = 'none',
  style,
  ...props
}) => {
  const styleObj: TextStyle = {
    color: color,
    fontSize: Metrix.customFontSize(size),
    paddingTop: Metrix.VerticalSize(pT),
    paddingBottom: Metrix.VerticalSize(pB),
    paddingLeft: Metrix.HorizontalSize(pL),
    paddingRight: Metrix.HorizontalSize(pR),
    marginTop: Metrix.VerticalSize(mT),
    marginBottom: Metrix.VerticalSize(mB),
    marginLeft: Metrix.HorizontalSize(mL),
    marginRight: Metrix.HorizontalSize(mR),
    textDecorationLine: textDecoration,
    ...(extraLight
      ? fonts.extraLight()
      : light
      ? fonts.light()
      : medium
      ? fonts.medium()
      : semiBold
      ? fonts.semiBold()
      : bold
      ? fonts.bold()
      : extraBold
      ? fonts.extraBold()
      : fonts.regular()),
    ...(upperCase && {textTransform: 'uppercase'}),
    ...(capitalize && {textTransform: 'capitalize'}),
    ...(letterSpacing && {letterSpacing}),
    textAlign,
    ...(lineHeight && {lineHeight: lineHeight}),
    ...style,
  };

  return (
    <Text
      style={styleObj}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      {...props}>
      {children || text}
    </Text>
  );
};

export default Typography;
