import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import MealItem from "../components/MealItem";
import Colors from "../constans/Colors";

export default function MealsList(props) {
  renderMealItems = itemData => {
    console.log(itemData.item.affordablility);

    return (
      <MealItem
        title={itemData.item.title}
        onSelectMeal={() =>
          props.navigation.navigate({
            routeName: "MealDetail",
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
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItems}
        style={{ width: "100%" }}
      />
    </View>
  );
}

MealsList.navigationOptions = {
  tabBarColor: Colors.accentColor,
  headerStyle: { backgroundColor: "white" }
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center"
  }
});
