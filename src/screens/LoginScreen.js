import { Text, Button, View, ActivityIndicator, Image } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

import React, { useState, useEffect } from "react";

export default function LoginScreen({ navigation }) {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  return (
    <View>
      <Text>this is the login page</Text>
      <TextInput
        placeholder="e-mail"
        onChangeText={(text) => {
          setUsername(text);
        }}
      />
      <TextInput
        placeholder="password"
        onChangeText={(text) => {
          setPassword(text);
        }}
      />
      <Button
        title="click here to sign up"
        onPress={() => navigation.navigate("SignUp")}
      />
    </View>
  );
}
