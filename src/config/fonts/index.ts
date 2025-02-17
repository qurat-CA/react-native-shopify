import {Platform, TextStyle} from 'react-native';

const extraLight = (): TextStyle => {
  return {
    ...Platform.select({
      ios: {
        fontFamily: 'Gilroy-UltraLight',
        fontWeight: '200',
      },
      android: {
        fontFamily: 'Gilroy-UltraLight',
      },
    }),
  };
};

const light = (): TextStyle => {
  return {
    ...Platform.select({
      ios: {
        fontFamily: 'Gilroy-Light',
        fontWeight: '300',
      },
      android: {
        fontFamily: 'Gilroy-Light',
      },
    }),
  };
};

const regular = (): TextStyle => {
  return {
    ...Platform.select({
      ios: {
        fontFamily: 'Gilroy-Regular',
        fontWeight: '400',
      },
      android: {
        fontFamily: 'Gilroy-Regular',
      },
    }),
  };
};

const medium = (): TextStyle => {
  return {
    ...Platform.select({
      ios: {
        fontFamily: 'Gilroy-Medium',
        fontWeight: '500',
      },
      android: {
        fontFamily: 'Gilroy-Medium',
      },
    }),
  };
};

const semiBold = (): TextStyle => {
  return {
    ...Platform.select({
      ios: {
        fontFamily: 'Gilroy-SemiBold',
        fontWeight: '600',
      },
      android: {
        fontFamily: 'Gilroy-SemiBold',
      },
    }),
  };
};

const bold = (): TextStyle => {
  return {
    ...Platform.select({
      ios: {
        fontFamily: 'Gilroy-Bold',
        fontWeight: '700',
      },
      android: {
        fontFamily: 'Gilroy-Bold',
      },
    }),
  };
};

const extraBold = (): TextStyle => {
  return {
    ...Platform.select({
      ios: {
        fontFamily: 'Gilroy-ExtraBold',
        fontWeight: '800',
      },
      android: {
        fontFamily: 'Gilroy-ExtraBold',
      },
    }),
  };
};

export default {
  extraLight,
  light,
  regular,
  medium,
  semiBold,
  bold,
  extraBold,
};
