import {Colors} from '../../config/color';
import {TAB_SVGS} from '../../config/images';
import {Home, Products} from '../../container';

type BottomTabConfigType = {
  [key: string]: {
    screenName: string;
    component: any;
    icon: (isFocused: boolean) => JSX.Element;
    iconGray: string;
    headerShown: boolean;
    label: string;
  };
};

export const BottomTabConfig = () => {
  const bottomTabConfig: BottomTabConfigType = {
    Home: {
      screenName: 'Home',
      component: Home,
      icon: (isFocused: boolean) => {
        return (
          <TAB_SVGS.HomeTab
            stroke={isFocused ? Colors.purpleV2 : Colors.black}
          />
        );
      },
      iconGray: '1',
      headerShown: false,
      label: 'Home',
    },
    Products: {
      screenName: 'Products',
      component: Products,
      icon: () => {
        return <TAB_SVGS.ProfileTab />;
      },
      iconGray: '1',
      headerShown: false,
      label: 'Rewards',
    },
  };
  return bottomTabConfig;
};
