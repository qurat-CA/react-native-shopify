import {StyleSheet, View} from 'react-native';
import {Metrix} from '../../config';
import { FlexProps } from '../../config/type/appDataType';

const Flex: React.FC<FlexProps> = ({
  children,
  justifyContent = 'flex-start',
  alignItems = 'center',
  mT = 0,
  mB = 0,
  gap = 0,
  flexWrap = 'nowrap',
  style = {},
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          alignItems,
          justifyContent,
          marginTop: Metrix.VerticalSize(mT),
          gap: Metrix.HorizontalSize(gap),
          flexWrap: flexWrap,
          marginBottom: Metrix.VerticalSize(mB),
        },
        style,
      ]}>
      {children}
    </View>
  );
};

export default Flex;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
