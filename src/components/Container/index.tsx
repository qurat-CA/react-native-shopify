import {StyleSheet, View, ViewStyle} from 'react-native';

import {Colors, Metrix} from '../../config';

interface ContainerProps {
  children: React.ReactNode;
  style?: ViewStyle;
  pH?: number;
  bgColor?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  pH = 24,
  bgColor = Colors.white,
}) => {
  return (
    <View
      style={[
        styles.main,
        {
          paddingHorizontal: Metrix.HorizontalSize(pH),
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
