import { Text, Button, View, ActivityIndicator, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

export default function LoginScreen({ navigation }) {
  return (
    <View>
      <Text>this is the login page</Text>
      <Button
        title="click here to sign up"
        onPress={() => navigation.navigate("SignUp")}
      />
    </View>
  );
}
