import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import CameraApp from "../screens/camera";
import ImagePickerExample from "../screens/imagePicker";
import Map from "../screens/Map";

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="camera" component={CameraApp} />
        <Stack.Screen name="imagepicker" component={ImagePickerExample} />
        <Stack.Screen name="map" component={Map} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
