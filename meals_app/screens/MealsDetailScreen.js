import React from "react";
import { Text, View, StyleSheet } from "react-native";

const MealsDetailScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Meals MealsDetailScreen Sceen</Text>
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

export default MealsDetailScreen;
