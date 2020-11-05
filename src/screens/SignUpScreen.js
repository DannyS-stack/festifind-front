import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView, Alert } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/query";

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [username, setUsername] = useState(null);
  const [phone, setPhone] = useState("");
  const [name, setName] = useState(null);
  const [image, setImage] = useState(null);
  const [createUser, { error }] = useMutation(CREATE_USER, {
    variables: {
      email: email,
      password: password,
      username: username,
      phone: phone.toString(),
      name: name,
      image: image,
    },
  });
  return (
    <ScrollView>
      <View style={styles.regform}>
        <Text style={styles.header}>SIGN UP</Text>
        <TextInput
          style={styles.Textinput}
          placeholder="your name"
          onChangeText={(text) => {
            setName(text);
          }}
        />
        <TextInput
          style={styles.Textinput}
          placeholder="your email"
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
        <TextInput
          style={styles.Textinput}
          placeholder="password"
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
        <TextInput
          style={styles.Textinput}
          placeholder="username"
          onChangeText={(text) => {
            setUsername(text);
          }}
        />
        <TextInput
          style={styles.Textinput}
          placeholder="phone"
          onChangeText={(text) => {
            setPhone(text);
          }}
        />

        <TextInput
          style={styles.Textinput}
          placeholder="Image"
          onChangeText={(text) => {
            setImage(text);
          }}
        />

        <TouchableOpacity
          onPress={() => {
            if (
              (username && password && phone && name && email !== null) ||
              (username && password && phone && name && email !== "")
            ) {
              createUser();
              Alert.alert("Sign Up Successfull!");
              navigation.navigate("Login");
            } else {
              Alert.alert(`please fill in all the fields`);
            }
          }}
          style={styles.button}
        >
          <Text style={styles.btntext}>Submit</Text>
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
    color: "#f8f8f8",
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
    color: "#f8f8f8",
    fontWeight: "bold",
  },
});
