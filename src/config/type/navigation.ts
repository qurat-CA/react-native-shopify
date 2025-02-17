import {ParamListBase} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  Signin: undefined;
  Signup: undefined;
};

export type AppStackParamList = {
  HomeTabs: undefined;
  Home: undefined;
};

export type NavigationStackType<T extends ParamListBase = RootStackParamList> =
  StackNavigationProp<T>;
