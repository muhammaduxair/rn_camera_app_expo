import React, { useState, useEffect, useRef } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { SimpleLineIcons, MaterialIcons } from "@expo/vector-icons";

export default function CameraApp() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.on);
  const cam = useRef(null);

  const changeCameraType = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const Snap = async () => {
    if (cam) {
      let photo = await cam.current.takePictureAsync();
      MediaLibrary.saveToLibraryAsync(photo.uri);
      console.log(photo);
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
      MediaLibrary.requestPermissionsAsync();
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1 }}
        type={type}
        flashMode={flash}
        autoFocus={Camera.Constants.AutoFocus.on}
        ref={cam}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 10,
            padding: 10,
          }}
        >
          <MaterialIcons
            name={
              flash === Camera.Constants.FlashMode.on ? "flash-on" : "flash-off"
            }
            size={30}
            color="#fff"
            onPress={() =>
              setFlash(
                flash === Camera.Constants.FlashMode.on
                  ? Camera.Constants.FlashMode.off
                  : Camera.Constants.FlashMode.on
              )
            }
          />
          <TouchableOpacity activeOpacity={0.5} onPress={Snap}>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                borderWidth: 5,
                borderColor: "#fff",
              }}
            />
          </TouchableOpacity>
          <SimpleLineIcons
            name="camera"
            size={30}
            color="#fff"
            onPress={changeCameraType}
          />
        </View>
      </Camera>
    </View>
  );
}
