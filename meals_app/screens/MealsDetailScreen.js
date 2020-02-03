import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Platform
} from "react-native";
import { MEALS } from "../data/dummydata";
import { FlatList } from "react-native-gesture-handler";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";

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

MealsDetailScreen.navigationOptions = ({ navigation }) => {
  const mealTitle = navigation.getParam("title");
  const meal = MEALS.find(meal => meal.title === mealTitle);

  return {
    headerTitle: meal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => console.log("Mark as favorite!")}
        />
      </HeaderButtons>
    )
  };
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
    paddingVertical: 5,
    textAlign: "center"
  },
  stepsContainer: {
    height: 400,
    backgroundColor: "rgba(255,255,255,1)",
    padding: 10
  },
  steps: {
    fontSize: 18,
    borderRadius: 10,
    marginBottom: 10,
    padding: 15,
    backgroundColor: "rgba(250,250,250,0.6)",
    elevation: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10
  }
});

export default MealsDetailScreen;
