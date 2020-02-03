import React from "react";
import { Text, View, StyleSheet } from "react-native";
import MealsList from "../components/MealsList";

import { MEALS } from "../data/dummydata";

const FavoritesScreen = props => {
  const favMeals = MEALS.map(meal => meal);
  console.log(favMeals.length);

  return <MealsList listData={favMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = {
  headerTitle: "Favorite Meals"
};

export default FavoritesScreen;
