import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.MAIN_BOX}>
      <Text>HOME</Text>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate("camera")}
      >
        <Text style={styles.bttn}>Open Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate("imagepicker")}
      >
        <Text style={styles.bttn}>Open Image Picker</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate("map")}
      >
        <Text style={styles.bttn}>Open Map</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  MAIN_BOX: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  bttn: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    color: "#fff",
    backgroundColor: "orange",
    marginBottom: 20,
  },
});
