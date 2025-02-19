import {ScrollView, StyleSheet, View, ViewStyle} from 'react-native';

import {Colors, Metrix} from '../../config';

interface ContainerProps {
  children: React.ReactNode;
  style?: ViewStyle;
  pH?: number;
  bgColor?: string;
  scrollView?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  children,
  pH = 24,
  bgColor = Colors.white,
  scrollView = false,
}) => {
  const Wrapper = scrollView ? ScrollView : View;
  return (
    <Wrapper
      showsVerticalScrollIndicator={false}
      style={[
        styles.main,
        {
          paddingHorizontal: Metrix.HorizontalSize(pH),
          backgroundColor: bgColor,
        },
      ]}>
      {children}
    </Wrapper>
  );
};

export default Container;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
