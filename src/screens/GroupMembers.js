import React, { useState } from "react";
import { FIND_GROUP } from "../graphql/query";
import { selectUser } from "../../store/user/selectors";
import { useSelector } from "react-redux";
import { gql, useMutation, useQuery } from "@apollo/client";

import { Text, Button, View, Alert, StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function GroupMembers({ route, navigation }) {
  const CREATE_PARTICIPANT = gql`
    mutation createParticipant($email: String, $groupId: Int) {
      createParticipant(email: $email, groupId: $groupId) {
        id
        userId
        groupId
      }
    }
  `;
  const DELETE_PARTICIPANT = gql`
    mutation deleteParticipant($userId: Int, $groupId: Int) {
      deleteParticipant(userId: $userId, groupId: $groupId) {
        id
        userId
        groupId
      }
    }
  `;

  const [email, setEmail] = useState(null);
  const user = useSelector(selectUser);
  const [createParticipant, { error1 }] = useMutation(CREATE_PARTICIPANT);
  const [deleteParticipant, { error2 }] = useMutation(DELETE_PARTICIPANT);

  const groupId = route.params;
  console.log("the groupid in groupmembers", groupId.groupId);
  const { loading, error, data } = useQuery(FIND_GROUP, {
    variables: {
      id: groupId.groupId,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        {data ? data.oneGroup.name : "group name here"}
      </Text>
      <View>
        <TextInput
          // secureTextEntry={true}
          placeholder="email"
          // placeholderTextColor={"white"}
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            createParticipant({
              variables: {
                email: email,
                groupId: groupId.groupId,
              },
            }),
              Alert.alert("user added!");
          }}
        >
          <Text style={styles.btntext}>add user</Text>
        </TouchableOpacity>
      </View>
      {loading ? (
        <Text>loading...</Text>
      ) : (
        data.oneGroup.participant.map((m) => {
          return (
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 18 }}>{m.name}</Text>
              <Text style={{ fontSize: 18 }}>{m.email}</Text>
              {data.oneGroup.ownerId === user.id ? (
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    deleteParticipant({
                      variables: {
                        userId: user.id,
                        groupId: groupId.groupId,
                      },
                    });

                    Alert.alert("user deleted!");
                  }}
                >
                  <Text style={styles.btntext}>delete user</Text>
                </TouchableOpacity>
              ) : null}
            </View>
          );
        })
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4e779c",
    alignItems: "center",
    justifyContent: "center",
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
