import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const CategoryMealsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The CategoryMealsScreen Sceen</Text>
      <Button
        title="Meals Details"
        onPress={() => props.navigation.navigate("MealsDetail")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center"
  }
});

export default CategoryMealsScreen;
