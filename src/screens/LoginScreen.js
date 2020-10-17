import { Text, Button, View, ActivityIndicator, Image } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { useQuery } from "@apollo/client";
import React, { useState, useEffect } from "react";
import { LOGIN } from "../graphql/query";
import AsyncStorage from "@react-native-community/async-storage";

export default function LoginScreen({ navigation }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { loading, error, data } = useQuery(LOGIN, {
    variables: {
      email: email,
      password: password,
    },
  });

  async function loginUser() {
    await LOGIN;
    console.log("data in loginuser", data);

    storeData(data);

    navigation.navigate("MainMenu", { screen: "Groups" });
  }

  const storeData = async (value) => {
    try {
      console.log("value login id:", value.login.id);
      const jsonValueId = JSON.stringify(value.login.id);
      console.log("the jsonvalue", jsonValueId);
      await AsyncStorage.setItem("storedId", jsonValueId);
      const jsonValueUser = JSON.stringify(value);
      await AsyncStorage.setItem("storedUser", jsonValueUser);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View>
      <Text>lOGIN</Text>
      <TextInput
        placeholder="e-mail"
        onChangeText={(text) => {
          setEmail(text);
        }}
      />
      <TextInput
        placeholder="password"
        onChangeText={(text) => {
          setPassword(text);
        }}
      />

      <Button
        title="login"
        onPress={() => {
          loginUser();
        }}
      />
      <Button
        title="click here to sign up"
        onPress={() => navigation.navigate("SignUp")}
      />
    </View>
  );
}
