import {BottomTab} from '../components';
import {Signin, Signup, ProductDetail} from '../container';
import HomeTabs from '../navigation/BottomTabs';

export const Screens = {
  Signin: 'Signin',
  Signup: 'Signup',
  AuthNavigation: 'AuthNavigation',
  MainNavigation: 'MainNavigation',
  BottomTab: 'BottomTab',
  Home: 'Home',
  Products: 'Products',
  ProductDetail: 'ProductDetail',
};

type ScreenType = {
  name: string;
  component: React.ComponentType<any>;
};

const authScreens: ScreenType[] = [
  {name: Screens.Signin, component: Signin},
  {name: Screens.Signup, component: Signup},
];

const appScreens: ScreenType[] = [
  {name: Screens.BottomTab, component: HomeTabs},
  {name: Screens.ProductDetail, component: ProductDetail},
];

export {authScreens, appScreens};
