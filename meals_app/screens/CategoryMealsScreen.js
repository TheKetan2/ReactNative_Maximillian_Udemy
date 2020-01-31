import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { CATEGORIES } from "../data/dummydata";
import Colors from "../constans/Colors";
let titleHeader = "";
const CategoryMealsScreen = props => {
  const categoryId = props.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId);
  CategoryMealsScreen.navigationOptions(selectedCategory.title);
  // console.log(Object.keys(props.navigation));
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
  // const catId = navigationData.navigation.getParam("categoryId");
  // const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  // console.log(catId);
  // console.log(navigationData.navigation.getParam("categoryId"));
  return {
    headerTitle: titleHeader,
    headerStyle: {
      backgroundColor: Colors.primaryColor
    },
    headerTintColor: "white"
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
