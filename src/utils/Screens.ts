import {BottomTab} from '../components';
import {Signin, Signup, Home, Products} from '../container';

export const Screens = {
  Signin: 'Signin',
  Signup: 'Signup',
  AuthNavigation: 'AuthNavigation',
  MainNavigation: 'MainNavigation',
  BottomTab: 'BottomTab',
  Home: 'Home',
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
  {name: Screens.BottomTab, component: BottomTab},
];

export {authScreens, appScreens};
