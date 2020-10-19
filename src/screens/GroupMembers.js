import React from "react";
import { FIND_GROUP } from "../graphql/query";
import { useQuery } from "@apollo/client";

import { Text, Button, View, Image, StyleSheet } from "react-native";

export default function GroupMembers({ route, navigation }) {
  const groupId = route.params;
  console.log("the groupid in groupmembers", groupId.groupId);
  const { loading, error, data } = useQuery(FIND_GROUP, {
    variables: {
      id: groupId.groupId,
    },
  });
  console.log(data);
  // here i need to show a list off al the members of a group
  // get the id from the params
  // make a query with the the group id as an argument on backend
  // find the right group on database
  // make the query on the frontend
  // get the groups data in local state
  //???
  //profit

  return (
    <View>
      <Text>the indivdual selected group is displayed here</Text>
    </View>
  );
}
