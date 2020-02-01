import React from "react";
import { Text, View, StyleSheet, Button, Platform } from "react-native";
import { CATEGORIES } from "../data/dummydata";
import Colors from "../constans/Colors";
let titleHeader = "";
const CategoryMealsScreen = props => {
  const categoryId = props.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId);
  titleHeader = selectedCategory.title;
  return (
    <View style={styles.screen}>
      <Text>{selectedCategory.title}</Text>

      <Button
        title="Meals Details"
        onPress={() => props.navigation.navigate("MealsDetail")}
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
