import React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { MEALS } from "../data/dummydata";
import { FlatList } from "react-native-gesture-handler";

const MealsDetailScreen = props => {
  const mealTitle = props.navigation.getParam("title");
  console.log(mealTitle);
  const meal = MEALS.find(item => item.title === mealTitle);
  console.log(meal.steps);

  renderSteps = item => {
    console.log(item.item);
    return (
      <View>
        <Text style={styles.steps}>{item.index + 1 + ": " + item.item}</Text>
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <View>
        <ImageBackground source={{ uri: meal.imgURL }} style={styles.imgBG}>
          <Text style={styles.title}>{meal.title}</Text>
        </ImageBackground>
      </View>
      <View style={styles.stepsContainer}>
        <FlatList
          data={meal.steps}
          renderItem={renderSteps}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignContent: "center",
    flexDirection: "column"
  },
  imgBG: {
    width: "100%",
    height: 300,
    justifyContent: "flex-end"
  },
  title: {
    fontSize: 18,
    fontFamily: "open-sans-bold",
    backgroundColor: "rgba(0,0,0,0.6)",
    color: "white",
    paddingVertical: 5
  },
  stepsContainer: {
    height: 300,
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: 10
  },
  steps: {
    fontSize: 18,
    borderRadius: 10,
    marginBottom: 10,
    padding: 15,
    backgroundColor: "white"
  }
});

export default MealsDetailScreen;
