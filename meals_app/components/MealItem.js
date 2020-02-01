import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from "react-native";

export default function MealItem(props) {
  console.log(props.img);
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground source={{ uri: props.img }} style={styles.bgImage}>
              <Text style={styles.title}>{props.title}</Text>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
            <Text>{props.duration}</Text>
            <Text>{props.complexity.toUpperCase()}</Text>
            <Text>{props.affordablility.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mealHeader: { height: "85%" },
  mealDetails: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    height: "15%"
  },
  mealItem: {
    height: 200,
    flex: 1,
    backgroundColor: "#f5f5f5",
    margin: 10,
    // padding: 10,
    borderRadius: 10,
    overflow: "hidden"
  },
  mealRow: {
    flexDirection: "row"
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end"
  },
  title: {
    backgroundColor: "rgba(0,0,0, .6)",
    color: "white",
    fontSize: 16,
    fontFamily: "open-sans-bold",
    paddingVertical: 5,
    textAlign: "center"
  }
});
