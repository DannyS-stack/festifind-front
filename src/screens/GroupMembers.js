import React from "react";
import { FIND_GROUP } from "../graphql/query";
import { useQuery } from "@apollo/client";
import { selectUser } from "../../store/user/selectors";
import { useSelector } from "react-redux";

import { Text, Button, View, Image, StyleSheet } from "react-native";

export default function GroupMembers({ route, navigation }) {
  const user = useSelector(selectUser);

  const groupId = route.params;
  console.log("the groupid in groupmembers", groupId.groupId);
  const { loading, error, data } = useQuery(FIND_GROUP, {
    variables: {
      id: groupId.groupId,
    },
  });
  // here i need to show a list off al the members of a group
  // get the id from the params V
  // make a query with the the group id as an argument on backend V
  // find the right group on database V
  // make the query on the frontend V
  // get the groups data in local state V
  // display add user en delete user buttons if group.ownerId === user.id
  // make parameterized selector and pass the route params.groupid
  // in the selector map over and use .find to find group
  // out of that group select the ownerId
  // check if ownerId === user.id
  // make input field(for username) and make it a controlled input.
  // onpress add user button send mutation to backend to first find that user and then add him to the group
  //???
  //profit

  return (
    <View>
      <Text>the indivdual selected group is displayed here</Text>
      {loading ? (
        <Text>loading...</Text>
      ) : (
        data.oneGroup.participant.map((m) => {
          {
            console.log(m);
          }
          return (
            <View>
              <Text>{m.name}</Text>
              <Text>{m.email}</Text>
              {groupId.groupId === user.id ? (
                <View>
                  <Button
                    title="delete user"
                    onPress={console.log("button works")}
                  ></Button>
                  <Button
                    title="add user"
                    onPress={() => console.log("button works")}
                  ></Button>
                </View>
              ) : null}
            </View>
          );
        })
      )}
    </View>
  );
}
