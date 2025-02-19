import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {BottomTabConfig} from './config';
import {Colors, Metrix} from '../../config';
import {BottomTab, Typography} from '../../components';
import styles from './styles';

const HomeTabNavigation = createBottomTabNavigator();

const HomeTabs = () => {
  const bottomTabConfig = BottomTabConfig();

  function MyTabBar({state, descriptors, navigation}: any) {
    return (
      <View style={styles.tabOuterContainer}>
        <BottomTab style={styles.bottomTabStyle}>
          <View style={styles.tabInnerContainer}>
            {state?.routes?.map((route: any, index: number) => {
              const {options} = descriptors[route.key];
              const label = options.tabBarLabel ?? options.title ?? route.name;
              const isFocused = state.index === index;

              const onPress = () => {
                if (!isFocused) {
                  navigation.navigate(route.name);
                }
              };

              return (
                <TouchableOpacity
                  key={Math?.random()}
                  accessibilityRole="button"
                  activeOpacity={Metrix.ActiveOpacity}
                  style={styles.tabContainer}
                  onPress={onPress}>
                  {bottomTabConfig[label]?.icon(isFocused)}

                  {isFocused && (
                    <View
                      style={{
                        width: Metrix.HorizontalSize(10),
                        height: Metrix.VerticalSize(3),
                        borderRadius: 4,
                        backgroundColor: Colors.green,
                        marginTop: Metrix.VerticalSize(4),
                      }}
                    />
                  )}

                  <Typography
                    mT={!isFocused ? 5 : 0}
                    size={12}
                    medium={!isFocused}
                    bold={isFocused}
                    color={isFocused ? Colors.green : Colors.textV2}>
                    {label}
                  </Typography>
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
        name={bottomTabConfig.Products.screenName}
        component={bottomTabConfig.Products.component}
      />
      <HomeTabNavigation.Screen
        name={'E'}
        component={bottomTabConfig.Home.component}
      />
      <HomeTabNavigation.Screen
        name={'Profile'}
        component={bottomTabConfig.Products.component}
      />
    </HomeTabNavigation.Navigator>
  );
};

export default HomeTabs;
