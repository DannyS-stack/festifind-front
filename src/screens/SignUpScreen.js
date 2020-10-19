import React, { useState, useEffect } from "react";
import { Text, Button, View, ActivityIndicator, Image } from "react-native";
import { Form } from "react-bootstrap";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { gql, useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/query";

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
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
    <View>
      <Text>SIGN UP</Text>
      <TextInput
        placeholder="your name"
        onChangeText={(text) => {
          setName(text);
        }}
      />
      <TextInput
        placeholder="username"
        onChangeText={(text) => {
          setUsername(text);
        }}
      />
      <TextInput
        placeholder="your email"
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
      <TextInput
        placeholder="phone"
        onChangeText={(text) => {
          setPhone(text);
        }}
      />
      <TextInput
        placeholder="Image"
        onChangeText={(text) => {
          setImage(text);
        }}
      />

      <TouchableOpacity>
        <Button title="submit" onPress={createUser}>
          {" "}
        </Button>
      </TouchableOpacity>
    </View>
  );
}
