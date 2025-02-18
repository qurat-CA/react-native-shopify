import React from 'react';
import {Dimensions, StyleSheet, View, ViewStyle} from 'react-native';
import Svg, {Path} from 'react-native-svg';

import {Colors, shadow} from '../../config/color';
import {PATH} from './data';

const vw = Dimensions.get('window').width * 0.01;
const vh = Dimensions.get('window').height * 0.01;

interface BottomTabProps {
  children: React.ReactNode;
  style?: ViewStyle;
  // currentFocusedTab: number;
}

const BottomTab: React.FC<BottomTabProps> = ({children, style}) => {
  return (
    <View style={[styles.container, style]}>
      {/* <Svg>
        <Path d={PATH[currentFocusedTab]} fill={Colors.primary} />
      </Svg> */}
      {children}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: vw * 18,
    width: vw * 100,
    backgroundColor: Colors.white,
    ...shadow,
  },
});
export default BottomTab;
