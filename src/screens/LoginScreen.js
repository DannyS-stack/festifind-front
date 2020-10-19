import {
  Text,
  Button,
  View,
  ActivityIndicator,
  Image,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { useQuery } from "@apollo/client";
import React, { useState, useEffect } from "react";
import { LOGIN } from "../graphql/query";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../store/user/actions";
import AsyncStorage from "@react-native-community/async-storage";
import BgImage from "../../Images/pexels-photo-625644 (1).jpeg";
import Logo from "../../Images/glasses.svg";
const { width: WIDTH } = Dimensions.get("window");

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
    console.log(email);
    console.log(password);
    LOGIN;
    dispatch(loginSuccess(data.login));
    navigation.navigate("MainMenu", { screen: "Groups" });
  }

  return (
    <ImageBackground source={BgImage} style={styles.BackGroundContainer}>
      <View style={styles.LogoContainer}>
        <Image style={styles.Logo} source={Logo}></Image>

        <Text style={styles.LogoText}>Festifind</Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="e-mail"
          // placeholderTextColor={"white"}
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
        <TextInput
          style={styles.input}
          // secureTextEntry={true}
          placeholder="password"
          // placeholderTextColor={"white"}
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
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  BackGroundContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  LogoContainer: {
    alignItems: "center",
  },
  Logo: {
    width: 120,
    height: 120,
  },
  LogoText: {
    padding: 20,
    color: "white",
    fontSize: 20,
  },

  input: {
    width: WIDTH - 55,
    height: 25,
    borderRadius: 45,
    fontSize: 16,
    paddingLeft: 45,
    marginVertical: 15,
    marginHorizontal: 25,
    backgroundColor: "rgba(0,0,0,0.45)",
    color: "rgba(255,255,255,0.7)",
  },
});
