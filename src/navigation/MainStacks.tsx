import {Easing} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {appScreens, Screens} from '../utils/Screens';

const AppStack = createStackNavigator();

const MainNavigation = () => {
  return (
    <AppStack.Navigator
      initialRouteName={Screens.BottomTab}
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: ({current, layouts}) => {
          const translateX = current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [layouts.screen.width, 0],
          });

          const opacity = current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          });

          return {
            cardStyle: {
              transform: [{translateX}],
              opacity,
            },
          };
        },
        transitionSpec: {
          open: {
            animation: 'timing',
            config: {
              duration: 300,
              easing: Easing.in(Easing.ease),
            },
          },
          close: {
            animation: 'timing',
            config: {
              duration: 300,
              easing: Easing.in(Easing.ease),
            },
          },
        },
      }}>
      {appScreens.map(screen => (
        <AppStack.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
        />
      ))}
    </AppStack.Navigator>
  );
};

export default MainNavigation;
