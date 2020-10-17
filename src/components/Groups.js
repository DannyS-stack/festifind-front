import { View, Text, TextInput, TouchableOpacity, Button } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { useLazyQuery } from "@apollo/client";
import { GET_USERS_GROUPS } from "../graphql/query";

export default function Groups() {
  const [getUserData, { error, data }] = useLazyQuery(GET_USERS_GROUPS);
  const [userData, setUserData] = useState(null);
  const [fetchmedata, setFetchMeData] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem("storedId").then((res) => {
      console.log("what we need", res);
      setUserData(JSON.parse(res));
      setFetchMeData(true);
    });
  }, []);

  console.log("the userdata in the useeffect", userData);
  if (fetchmedata) {
    getUserData({
      variables: {
        id: userData,
      },
    });
    setFetchMeData(false);
  }

  console.log("the users group data in groups component", data);
  return (
    <View>
      <Text>The groups are displayed here </Text>
    </View>
  );
}
