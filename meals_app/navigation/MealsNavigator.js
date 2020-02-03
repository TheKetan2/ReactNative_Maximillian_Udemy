import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealsDetailScreen from "../screens/MealsDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import Colors from "../constans/Colors";
import { Platform } from "react-native";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Colors.primaryColor
  },
  headerTintColor: "white"
};
const FavNavigator = createStackNavigator(
  {
    Favorite: FavoritesScreen,
    MealsDetail: MealsDetailScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primaryColor
      },
      headerTintColor: "white"
    }
  }
);

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen
    },

    CategoryMeals: {
      screen: CategoryMealsScreen
    },
    MealsDetail: { screen: MealsDetailScreen }
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(
        {
          Meals: {
            screen: MealsNavigator,
            navigationOptions: {
              tabBarColor: Colors.primaryColor,
              tabBarIcon: tabInfo => {
                return (
                  <Ionicons
                    name="ios-restaurant"
                    size={25}
                    color={tabInfo.tintColor}
                  />
                );
              }
            }
          },
          Favorite: {
            screen: FavoritesScreen,
            navigationOptions: {
              tabBarColor: Colors.primaryColor,
              tabBarLabel: "Favorite!",
              tabBarIcon: tabInfo => {
                return (
                  <Ionicons
                    name="ios-star"
                    size={25}
                    color={tabInfo.tintColor}
                  />
                );
              }
            }
          }
        },
        {
          activeTintColor: Colors.accentColor,
          shifting: true
        }
      )
    : createBottomTabNavigator(
        {
          Meals: {
            screen: MealsNavigator,
            navigationOptions: {
              tabBarIcon: tabInfo => {
                return (
                  <Ionicons
                    name="ios-restaurant"
                    size={25}
                    color={tabInfo.tintColor}
                  />
                );
              }
            }
          },
          Favorite: {
            screen: FavoritesScreen,
            navigationOptions: {
              tabBarLabel: "Favorite!",
              tabBarIcon: tabInfo => {
                return (
                  <Ionicons
                    name="ios-star"
                    size={25}
                    color={tabInfo.tintColor}
                  />
                );
              }
            }
          }
        },
        {
          tabBarOptions: {
            activeTintColor: Colors.accentColor
          }
        }
      );
export default createAppContainer(MealsFavTabNavigator);
