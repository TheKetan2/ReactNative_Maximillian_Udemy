import { createStackNavigator } from "react-navigation-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealsDetailScreen from "../screens/MealsDetailScreen";
import { createAppContainer } from "react-navigation";

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,

  CategoryMeals: {
    screen: CategoryMealsScreen,
    navigationOptions: ({ navigation }) => ({
      title: navigation.getParam("title")
    })
  },
  MealsDetail: MealsDetailScreen
});

export default createAppContainer(MealsNavigator);
