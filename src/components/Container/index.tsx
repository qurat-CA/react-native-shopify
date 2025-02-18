import {StyleSheet, View, ViewStyle} from 'react-native';

import {Colors} from '../../config/color';
import metrix from '../../config/metrix';

interface ContainerProps {
  children: React.ReactNode;
  style?: ViewStyle;
  pT?: number;
  bgColor?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  pT = 16,
  bgColor = Colors.white,
}) => {
  return (
    <View
      style={[
        styles.main,
        {
          paddingHorizontal: metrix.HorizontalSize(pT),
          backgroundColor: bgColor,
        },
      ]}>
      {children}
    </View>
  );
};

export default Container;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
