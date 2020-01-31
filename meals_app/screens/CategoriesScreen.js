import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import MealsDetailScreen from "./MealsDetailScreen";
import { FlatList } from "react-native-gesture-handler";
import { CATEGORIES } from "../data/dummydata";

renderGridItem = itemData => {
  return (
    <View style={styles.gridItem}>
      <Text>{itemData.item.title}</Text>
    </View>
  );
};

const CategoriesScreen = props => {
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
    // <View style={styles.screen}>
    //   <Text>The Categories Sceen</Text>
    //   <Button
    //     title="Press Here"
    //     onPress={() =>
    //       props.navigation.navigate({ routeName: "CategoryMeals" })
    //     }
    //   />
    // </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center"
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 120
  }
});

export default CategoriesScreen;
