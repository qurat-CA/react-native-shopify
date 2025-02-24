import {StyleSheet} from 'react-native';
import {Colors, Metrix} from '../../config';

export const styles = StyleSheet.create({
  saleBadgeCont: {
    width: Metrix.HorizontalSize(55),
    padding: 4,
    backgroundColor: Colors.lightgreen,
    position: 'absolute',
    top: Metrix.VerticalSize(20),
    borderRadius: 4,
    zIndex: 1,
  },

  img: {
    width: '100%',
    height: 300,
    marginTop: 30,
    backgroundColor: 'orange',
  },

  wishlistCont: {
    width: Metrix.HorizontalSize(45),
    height: Metrix.HorizontalSize(45),
    borderRadius: 50,
    backgroundColor: Colors.white,
    elevation: 6,
    position: 'absolute',
    top: Metrix.VerticalSize(320),
    right: Metrix.HorizontalSize(0),
    justifyContent: 'center',
  },
});
