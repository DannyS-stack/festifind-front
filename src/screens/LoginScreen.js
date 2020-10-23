import {
  Text,
  Button,
  View,
  ActivityIndicator,
  Image,
  ImageBackground,
  StyleSheet,
  Dimensions,
  ScrollView,
  Alert,
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
    if (data) {
      Alert.alert("Login Sucessfull!");
      dispatch(loginSuccess(data.login));
      navigation.navigate("MainMenu", { screen: "Groups" });
    } else {
      Alert.alert(`${error}`);
    }
  }

  return (
    <ScrollView>
      <View style={styles.regform}>
        {/* <Image style={styles.Logo} source={Logo} /> */}
        <Text style={styles.header}>Festifind</Text>
        <TextInput
          style={styles.Textinput}
          placeholder="e-mail"
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
        <TextInput
          style={styles.Textinput}
          secureTextEntry={true}
          placeholder="password"
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            loginUser();
          }}
        >
          <Text style={styles.btntext}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.btntext}>sign up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  regform: {
    alignSelf: "stretch",
    backgroundColor: "#4e779c",
    padding: 100,
  },
  header: {
    fontSize: 24,
    color: "#fff",
    paddingBottom: 10,

    marginBottom: 40,
    borderBottomColor: "#eb8407",
    borderBottomWidth: 2,
  },
  Textinput: {
    alignSelf: "stretch",
    height: 40,
    marginBottom: 30,
    color: "#fff",
    borderBottomColor: "#f8f8f8",
    borderBottomWidth: 1,
  },
  button: {
    alignSelf: "stretch",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#eb8407",
    marginTop: 50,
  },

  btntext: {
    color: "#fff",
    fontWeight: "bold",
  },
});

// const styles = StyleSheet.create({
//   BackGroundContainer: {
//     flex: 1,
//     width: "100%",
//     height: "100%",
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   LogoContainer: {
//     alignItems: "center",
//   },
//   Logo: {
//     width: 120,
//     height: 120,
//   },
//   LogoText: {
//     padding: 20,
//     color: "white",
//     fontSize: 20,
//   },

//   input: {
//     width: WIDTH - 55,
//     height: 25,
//     borderRadius: 45,
//     fontSize: 16,
//     paddingLeft: 45,
//     marginVertical: 15,
//     marginHorizontal: 25,
//     backgroundColor: "rgba(0,0,0,0.45)",
//     color: "rgba(255,255,255,0.7)",
//   },
// });
