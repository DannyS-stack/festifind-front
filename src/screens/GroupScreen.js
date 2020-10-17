import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { Text, Button, View, ActivityIndicator, Image } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import GroupForm from "../components/GroupForm";
import Groups from "../components/Groups";

export default function GroupScreen() {
  const [data, setData] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem("storedUser").then((res) => setData(JSON.parse(res)));
  }, []);
  console.log("the data in groupscreen", data);

  return (
    <View>
      {data ? (
        <Text>
          welcome back, {data.login.name}, You can join your friends in one of
          the groups below, or create a new group!
        </Text>
      ) : (
        <Text>loading...</Text>
      )}
      <Groups />
      <GroupForm />
    </View>
  );
}
