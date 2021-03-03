import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

import RestaurantsStack from "./RestaurantsStack";
import AccountStack from "./AccountStack";
import FavoritesStack from "./FavoritesStack";
import TopRestaurantstack from "./TopRestaurantsStack";
import SearchStack from "./SearchStack";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  const screenOptions = (route, color) => {
    let iconName;
    switch (route.name) {
      case "restaurants":
        iconName = "compass-outline";
        break;
      case "favorites":
        iconName = "heart-outline";
        break;
      case "topRestaurants":
        iconName = "star-outline";
        break;
      case "search":
        iconName = "magnify";
        break;
      case "account":
        iconName = "home-outline";
        break;
    }
    return (
      <Icon type="material-community" name={iconName} size={22} color={color} />
    );
  };
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="restaurants"
        tabBarOptions={{
          inactiveTintColor: "#d8b45c",
          activeTintColor: "#6cbc94",
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color),
        })}
      >
        <Tab.Screen
          options={{ title: "Restaurants" }}
          name="restaurants"
          component={RestaurantsStack}
        />
        <Tab.Screen
          options={{ title: "Favorites" }}
          name="favorites"
          component={FavoritesStack}
        />
        <Tab.Screen
          options={{ title: "Top 5" }}
          name="topRestaurants"
          component={TopRestaurantstack}
        />
        <Tab.Screen
          options={{ title: "Search" }}
          name="search"
          component={SearchStack}
        />
        <Tab.Screen
          options={{ title: "Account " }}
          name="account"
          component={AccountStack}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
