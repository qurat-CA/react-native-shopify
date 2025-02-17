import {
  createNavigationContainerRef,
  CommonActions,
  DrawerActions,
} from '@react-navigation/native';
import {NavigationStackType} from '../type/navigation';

const navigationRef = createNavigationContainerRef<NavigationStackType>();

const navigate = (name: any, params?: any) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
};
const push = (name: any, params?: any) => {
  if (navigationRef.isReady()) {
    navigationRef.push(name, params);
  }
};
const reset = (name: any, data?: any) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name, params: {data}}],
      }),
    );
  }
};
const goBack = () => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(CommonActions.goBack());
  }
};

const openDrawer = () => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(DrawerActions.openDrawer());
  }
};

const closeDrawer = () => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(DrawerActions.closeDrawer());
  }
};

export default {
  navigationRef,
  navigate,
  reset,
  goBack,
  push,
  closeDrawer,
  openDrawer,
};
