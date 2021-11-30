import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MenuIcon from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon1 from "react-native-vector-icons/AntDesign";

import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import PostAdsScreen from "../screens/PostAdsScreen";
import ProfileScreen from "../screens/ProfileScreen";

const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Feed"
    tabBarOptions={{
      activeTintColor: "#009387",
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: "Home",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={SearchStackScreen}
      options={{
        tabBarLabel: "Search",
        tabBarIcon: ({ color, size }) => (
          <Icon name="search" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="PostAds"
      component={PostAdsStackScreen}
      options={{
        tabBarLabel: "Post Ads",
        tabBarIcon: ({ color, size }) => (
          <Icon1 name="pluscircleo" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: "Profile",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#009387",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: "EASY4AD",
        headerLeft: () => (
          <MenuIcon.Button
            name="md-menu-sharp"
            size={30}
            backgroundColor="#009387"
            onPress={() => {
              navigation.openDrawer();
            }}
          ></MenuIcon.Button>
        ),
      }}
    />
  </HomeStack.Navigator>
);

const SearchStackScreen = ({ navigation }) => (
  <SearchStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#009387",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <SearchStack.Screen
      name="Search"
      component={SearchScreen}
      options={{
        headerLeft: () => (
          <MenuIcon.Button
            name="md-menu-sharp"
            size={30}
            backgroundColor="#009387"
            onPress={() => {
              navigation.openDrawer();
            }}
          ></MenuIcon.Button>
        ),
      }}
    />
  </SearchStack.Navigator>
);

const PostAdsStackScreen = ({ navigation }) => (
  <SearchStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#009387",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <SearchStack.Screen
      name="PostAds"
      component={PostAdsScreen}
      options={{
        headerLeft: () => (
          <MenuIcon.Button
            name="md-menu-sharp"
            size={30}
            backgroundColor="#009387"
            onPress={() => {
              navigation.openDrawer();
            }}
          ></MenuIcon.Button>
        ),
      }}
    />
  </SearchStack.Navigator>
);

const ProfileStackScreen = ({ navigation }) => (
  <SearchStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#009387",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <SearchStack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        headerLeft: () => (
          <MenuIcon.Button
            name="md-menu-sharp"
            size={30}
            backgroundColor="#009387"
            onPress={() => {
              navigation.openDrawer();
            }}
          ></MenuIcon.Button>
        ),
      }}
    />
  </SearchStack.Navigator>
);
