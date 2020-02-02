import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealsDetailScreen from "../screens/MealsDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import Colors from "../constans/Colors";

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
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primaryColor
      },
      headerTintColor: "white"
    }
  }
);

const MealsFavTabNavigator = createBottomTabNavigator({
  Meals: MealsNavigator,
  Favorite: {
    screen: FavoritesScreen,
    navigationOptions: {
      headerTitle: "Favorite Screen"
    }
  }
});
export default createAppContainer(MealsFavTabNavigator);
