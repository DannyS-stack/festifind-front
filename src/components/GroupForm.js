import { View, Text, TextInput, TouchableOpacity, Button } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { gql, useMutation } from "@apollo/client";

export default function GroupForm() {
  const [data, setData] = useState(null);

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  //   const [createGroup, { error }] = useMutation(CREATE_GROUP, {
  //     variables: {
  //       name: groupname,
  //       image: image,
  //     },
  //   });
  //   useEffect(() => {
  //     AsyncStorage.getItem("storedUser").then((res) => setData(JSON.parse(res)));
  //   }, []);
  //   console.log("CLG data in groupform", data);

  return (
    <View>
      <Text>Create group</Text>
      <TextInput
        placeholder="group name"
        onChangeText={(text) => {
          setName(text);
        }}
      />
      <TextInput
        placeholder="Add an image to the group"
        onChangeText={(text) => {
          setImage(text);
        }}
      />

      <TouchableOpacity>
        <Button title="Create!" onPress={console.log("createGroup")}></Button>
      </TouchableOpacity>
    </View>
  );
}
