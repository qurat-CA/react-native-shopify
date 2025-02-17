import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import {BottomTabConfig} from './config';
import {Colors} from '../../config/color/index';
import styles from './styles';
import {BottomTab, Typography} from '../../components';
import Metrix from '../../config/metrix';

const HomeTabNavigation = createBottomTabNavigator();

const HomeTabs = () => {
  const bottomTabConfig = BottomTabConfig();

  const [currentFocusedTab, setCurrentFocusedTab] = React.useState(0);
  const circlePosition = useSharedValue(0);
  const fadeOpacity = useSharedValue(0);

  const animateCircle = (position: number) => {
    circlePosition.value = withTiming(position, {duration: 120});
  };

  const fadeIn = () => {
    fadeOpacity.value = withTiming(1, {duration: 100});
  };

  const fadeOut = () => {
    fadeOpacity.value = withTiming(0, {duration: 100});
  };

  function MyTabBar({state, descriptors, navigation}: any) {
    const animatedCircleStyle = useAnimatedStyle(() => ({
      bottom: circlePosition.value,
    }));

    const animatedFadeStyle = useAnimatedStyle(() => ({
      opacity: fadeOpacity.value,
    }));

    return (
      <View style={styles.tabOuterContainer}>
        <BottomTab
          style={styles.bottomTabStyle}
          currentFocusedTab={currentFocusedTab}>
          <View style={styles.tabInnerContainer}>
            {state?.routes?.map((route: any, index: number) => {
              const {options} = descriptors[route.key];
              const label = options.tabBarLabel ?? options.title ?? route.name;
              const isFocused = state.index === index;

              const onPress = () => {
                if (!isFocused) {
                  animateCircle(Metrix.VerticalSize(-30));
                  fadeOut();
                  navigation.navigate(route.name);
                }
              };

              if (isFocused) {
                setCurrentFocusedTab(index);
                animateCircle(30);
                fadeIn();
              }

              return (
                <TouchableOpacity
                  key={Math?.random()}
                  accessibilityRole="button"
                  activeOpacity={Metrix.ActiveOpacity}
                  style={styles.tabContainer}
                  onPress={onPress}>
                  {!isFocused && bottomTabConfig[label]?.icon(isFocused)}

                  {/* {isFocused ? (
                    <GradientText
                      colors={gradientColors}
                      style={styles.textStyle}>
                      {label}
                    </GradientText>
                  ) : ( */}
                  <Typography
                    mT={5}
                    size={12}
                    color={isFocused ? Colors.purpleV2 : Colors.lightblue}>
                    {label}
                  </Typography>
                  {/* )} */}

                  {isFocused && (
                    <Animated.View
                      style={[
                        {
                          position: 'absolute',
                          height: Metrix.VerticalSize(56),
                          top: -50,
                          zIndex: -2,
                        },
                        animatedFadeStyle,
                      ]}>
                      <View style={styles.animatedWhiteBGCircleCont}>
                        <View style={styles.animatedWhiteBGCircle} />
                      </View>
                    </Animated.View>
                  )}

                  {isFocused && (
                    <Animated.View
                      style={[
                        styles.animatedCircle,
                        animatedCircleStyle,
                        animatedFadeStyle,
                      ]}>
                      {bottomTabConfig[label]?.ActiveIcon}
                    </Animated.View>
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        </BottomTab>
      </View>
    );
  }

  return (
    <HomeTabNavigation.Navigator
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}>
      <HomeTabNavigation.Screen
        name={bottomTabConfig.Home.screenName}
        component={bottomTabConfig.Home.component}
      />
      <HomeTabNavigation.Screen
        name={bottomTabConfig.Rewards.screenName}
        component={bottomTabConfig.Rewards.component}
      />
      <HomeTabNavigation.Screen
        name={bottomTabConfig.MoneyPot.screenName}
        component={bottomTabConfig.MoneyPot.component}
      />
      <HomeTabNavigation.Screen
        name={bottomTabConfig.Profile.screenName}
        component={bottomTabConfig.Profile.component}
      />
    </HomeTabNavigation.Navigator>
  );
};

export default HomeTabs;
