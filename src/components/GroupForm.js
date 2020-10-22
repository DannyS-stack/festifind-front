import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { gql, useMutation } from "@apollo/client";

export default function GroupForm() {
  const [data, setData] = useState(null);

  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  return (
    <View style={styles.regform}>
      <Text style={styles.header}>Create group</Text>
      <TextInput
        s
        style={styles.Textinput}
        placeholder="group name"
        onChangeText={(text) => {
          setName(text);
        }}
      />
      <TextInput
        style={styles.Textinput}
        placeholder="group image (optional)"
        onChangeText={(text) => {
          setImage(text);
        }}
      />

      <TouchableOpacity style={styles.button}>
        <Text
          style={styles.btntext}
          onPress={() => Alert.alert("group created!")}
        >
          Create!
        </Text>
      </TouchableOpacity>
    </View>
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
