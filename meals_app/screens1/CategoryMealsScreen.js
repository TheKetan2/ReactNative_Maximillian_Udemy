import React from "react";

import { CATEGORIES, MEALS } from "../data/dummydata";
import MealsList from "../components/MealsList";

const CategoryMealsScreen = props => {
  const categoryId = props.navigation.getParam("categoryId");

  // const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId);
  const displayedMeals = MEALS.filter(
    meal => meal["categories"].indexOf(categoryId) >= 0
  );
  // console.log(displayedMeals, " ", categoryId, " ");

  return <MealsList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  return {
    headerTitle: selectedCategory.title
  };
};

export default CategoryMealsScreen;
