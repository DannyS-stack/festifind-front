import React, { useState } from "react";
import { FIND_GROUP } from "../graphql/query";
import { selectUser } from "../../store/user/selectors";
import { useSelector } from "react-redux";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_PARTICIPANT, DELETE_PARTICIPANT } from "../graphql/query";
import { Text, View, Alert, StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function GroupMembers({ route, navigation }) {
  const [email, setEmail] = useState(null);
  const user = useSelector(selectUser);
  const [createParticipant, { error }] = useMutation(CREATE_PARTICIPANT);
  const [deleteParticipant, { error2 }] = useMutation(DELETE_PARTICIPANT);

  const groupId = route.params;
  const { loading, error1, data } = useQuery(FIND_GROUP, {
    variables: {
      id: groupId.groupId,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        {data ? data.oneGroup.name : "groupname"}
      </Text>
      <View>
        <TextInput
          style={styles.Textinput}
          placeholder="email"
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
        <TouchableOpacity
          style={styles.button1}
          onPress={() => {
            createParticipant({
              variables: {
                email: email,
                groupId: parseInt(groupId.groupId),
              },
            }),
              error ? Alert.alert(`${error}`) : Alert.alert(`"user added!"`);
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
            <View style={{ flexDirection: "row" }} key={m.id}>
              <Text style={styles.textStyle}>{m.name}</Text>
              <Text style={styles.textStyle}>{m.email}</Text>
              {data.oneGroup.ownerId === user.id ? (
                <TouchableOpacity
                  style={styles.button1}
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
    flexDirection: "column",
    backgroundColor: "#4e779c",
    margin: 25,
    padding: 10,
    flex: 1,
    borderRadius: 8,
  },
  header: {
    fontSize: 24,
    color: "#fff",
    paddingBottom: 10,
    marginBottom: 70,

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
  textStyle: {
    fontSize: 18,
    flex: 1,
  },
  button1: {
    backgroundColor: "#eb8407",
    width: 70,
    height: 30,
    padding: 5,
    margin: 5,
    textAlign: "center",
    marginBottom: 100,
  },
  button2: {
    backgroundColor: "#eb8407",
    width: 70,
    height: 30,
    padding: 5,
    margin: 5,
    textAlign: "center",
  },
  buttonText: {
    fontSize: 15,
    color: "#FFFFFF",
    textAlign: "center",
  },
});
