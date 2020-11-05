import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { selectUser } from "../../store/user/selectors";
import { useSelector } from "react-redux";
import { gql, useMutation } from "@apollo/client";

export default function GroupForm() {
  const user = useSelector(selectUser);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const CREATE_NEW_GROUP = gql`
    mutation createGroup($ownerId: Int, $name: String!, $image: String) {
      createGroup(ownerId: $ownerId, name: $name, image: $image) {
        name
        image
        ownerId
      }
    }
  `;
  const [createGroup, { error }] = useMutation(CREATE_NEW_GROUP);

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
          onPress={() => {
            createGroup({
              variables: { ownerId: user.id, name: name, image: image },
            });

            Alert.alert("group created!");
          }}
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
