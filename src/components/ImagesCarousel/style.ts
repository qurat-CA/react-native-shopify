import {StyleSheet} from 'react-native';
import {Colors, Metrix} from '../../config';

export const styles = StyleSheet.create({
  img: {
    height: 300,
  },

  imagesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: Metrix.HorizontalSize(8),
    padding: Metrix.HorizontalSize(10),
    alignSelf: 'center',
    position: 'absolute',
    backgroundColor: Colors.greyV5,
    borderRadius: Metrix.Radius,
    top: Metrix.VerticalSize(280),
  },

  smallImg: {
    width: Metrix.HorizontalSize(35),
    height: Metrix.HorizontalSize(35),
    borderRadius: 4,
  },

  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
});
