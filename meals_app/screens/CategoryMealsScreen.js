import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummydata";
import { FlatList } from "react-native-gesture-handler";
import MealItem from "../components/MealItem";
const CategoryMealsScreen = props => {
  const categoryId = props.navigation.getParam("categoryId");

  // const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId);
  const displayedMeals = MEALS.filter(
    meal => meal["categories"].indexOf(categoryId) >= 0
  );
  // console.log(displayedMeals, " ", categoryId, " ");
  renderMealItems = itemData => {
    console.log(itemData.item.affordablility);

    return (
      <MealItem
        title={itemData.item.title}
        onSelectMeal={() =>
          props.navigation.navigate({
            routeName: "MealsDetail",
            params: { title: itemData.item.title }
          })
        }
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordablility={itemData.item.affordablility}
        img={itemData.item.imgURL}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItems}
        style={{ width: "100%" }}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  return {
    headerTitle: selectedCategory.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center"
  }
});

export default CategoryMealsScreen;
