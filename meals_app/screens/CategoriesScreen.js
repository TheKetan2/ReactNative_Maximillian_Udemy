import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import MealsDetailScreen from "./MealsDetailScreen";

const CategoriesScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Categories Sceen</Text>
      <Button
        title="Press Here"
        onPress={() =>
          props.navigation.navigate({ routeName: "CategoryMeals" })
        }
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

export default CategoriesScreen;
