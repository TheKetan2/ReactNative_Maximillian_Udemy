import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Platform
} from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";

export default function CategoryGridTile(props) {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <TouchableCmp style={styles.gridItem} onPress={props.onSelect}>
      <View style={{ ...styles.container, backgroundColor: props.color }}>
        <Text style={styles.title} numberOfLines={1}>
          {props.title}
        </Text>
      </View>
    </TouchableCmp>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 120,
    width: 200
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 4,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
    textAlign: "right"
  }
});
