import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import MealsDetailScreen from "./MealsDetailScreen";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { CATEGORIES } from "../data/dummydata";
import Colors from "../constans/Colors";

const CategoriesScreen = props => {
  renderGridItem = itemData => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() =>
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryId: itemData.item.id,
              title: itemData.item.title
            }
          })
        }
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Meals Categories",
  headerStyle: {
    backgroundColor: Colors.primaryColor
  },
  headerTintColor: "white"
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
    height: 120,
    width: 200
  }
});

export default CategoriesScreen;
