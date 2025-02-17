import {Colors} from '../../config/color';
import {Home, Products} from '../../container';

type BottomTabConfigType = {
  [key: string]: {
    screenName: string;
    component: any;
    icon: (isFocused: boolean) => JSX.Element;
    iconGray: string;
    headerShown: boolean;
    label: string;
    ActiveIcon: JSX.Element;
  };
};

export const BottomTabConfig = () => {
  const bottomTabConfig: BottomTabConfigType = {
    Home: {
      screenName: 'Home',
      component: Home,
      // icon: (isFocused: boolean) => {
      //   return (
      //     <TAB_SVGS.HomeTab
      //       stroke={isFocused ? Colors.purpleV2 : Colors.black}
      //     />
      //   );
      // },
      iconGray: '1',
      headerShown: false,
      label: 'Home',
      // ActiveIcon: <TAB_SVGS.HomeTabActive />,
    },
    Products: {
      screenName: 'Products',
      component: Products,
      // icon: () => {
      //   return <TAB_SVGS.QuizzesTab />;
      // },
      iconGray: '1',
      headerShown: false,
      label: 'Rewards',
      // ActiveIcon: <TAB_SVGS.RewardsTabActive />,
    },
  };
  return bottomTabConfig;
};
