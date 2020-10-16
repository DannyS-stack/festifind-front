import React from "react";
import { Text, Image, Button, View, ActivityIndicator } from "react-native";

export default function LocationsScreen() {
  return (
    <div>
      <p>i am the locations screen</p>
      <Image
        source={{
          uri:
            "https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg",
        }}
        style={{ width: 800, height: 800 }}
      />
    </div>
  );
}
