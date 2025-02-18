import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Colors} from '../../../config/color';
import {Typography} from '../../index';
import {Metrix} from '../../../config';

interface Props {
  item: [];
}
const ProductCard: React.FC<Props> = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={Metrix.ActiveOpacity}
      onPress={() =>
        navigation.navigate('ProductDetail', {productId: item.node.id})
      }>
      <Image
        source={{uri: item.node.variants.edges[0].node.image.src}}
        style={{width: 100, height: 100}}
      />

      <Typography bold color={Colors.textV2} numberOfLines={1}>
        {item.node.title}
      </Typography>
      <Typography size={14} medium color={Colors.greyV8}>
        ${item.node.variants.edges[0].node.priceV2.amount}
      </Typography>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    width: Metrix.HorizontalSize(155),
    height: Metrix.VerticalSize(200),
    backgroundColor: Colors.white,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.greyV4,
    marginBottom: Metrix.VerticalSize(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
