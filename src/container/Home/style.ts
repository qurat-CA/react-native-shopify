import {StyleSheet} from 'react-native';
import {Colors, Metrix} from '../../config';

export const styles = StyleSheet.create({
  flatlist: {
    paddingHorizontal: Metrix.HorizontalSize(5),
    marginHorizontal: Metrix.HorizontalSize(-5),
    marginTop: Metrix.VerticalSize(22),
  },

  contentContainer: {
    paddingBottom: Metrix.VerticalSize(75),
    paddingTop: Metrix.VerticalSize(2),
  },

  header: {
    width: '100%',
    height: Metrix.VerticalSize(170),
    backgroundColor: Colors.lightgreen,
    paddingHorizontal: Metrix.HorizontalSize(24),
  },

  profileCont: {
    width: Metrix.HorizontalSize(45),
    height: Metrix.VerticalSize(45),
    borderRadius: Metrix.Radius,
    backgroundColor: Colors.white,
    marginTop: Metrix.VerticalSize(16),
  },

  imageStyle: {
    width: Metrix.HorizontalSize(45),
    height: Metrix.VerticalSize(45),
    borderRadius: Metrix.Radius,
  },

  notificationCont: {
    width: Metrix.HorizontalSize(40),
    height: Metrix.VerticalSize(40),
    borderRadius: Metrix.Radius,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
