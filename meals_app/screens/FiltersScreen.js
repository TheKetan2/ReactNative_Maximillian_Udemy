import React from "react";
import { Text, View, StyleSheet } from "react-native";

const FiltersScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The FiltersScreen Sceen</Text>
    </View>
  );
};

FiltersScreen.navigationOptions = {
  headerTitle: "Filter Meals"
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center"
  }
});

export default FiltersScreen;
