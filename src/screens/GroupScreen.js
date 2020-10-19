import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { Text, Button, View, ActivityIndicator, Image } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import GroupForm from "../components/GroupForm";
import Groups from "../components/Groups";
import { selectUser } from "../../store/user/selectors";
import { useSelector } from "react-redux";

export default function GroupScreen({ navigation }) {
  const user = useSelector(selectUser);
  console.log("user in groupscreen??", user);
  // export const selectUser = (state) => state.User;
  selectUser;
  return (
    <View>
      <Text>
        welcome back {user.name}, You can join your friends in one of the groups
        below, or create a new group!
      </Text>
      <Groups navigation={navigation} />
      <GroupForm />
    </View>
  );
}
