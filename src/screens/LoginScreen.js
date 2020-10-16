import { Text, Button, View, ActivityIndicator, Image } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { useQuery } from "@apollo/client";
import React, { useState, useEffect } from "react";
import { LOGIN } from "../graphql/query";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../store/user/actions";
import AsyncStorage from "@react-native-community/async-storage";

export default function LoginScreen({ navigation }) {
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { loading, error, data } = useQuery(LOGIN, {
    variables: {
      email: email,
      password: password,
    },
  });
  function loginUser() {
    LOGIN;
    console.log(data);
    storeData(data);

    // localStorage.setItem("token", data.login.token);
    navigation.navigate("MainMenu", { screen: "Groups" });
  }

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("storedUser", jsonValue);
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
