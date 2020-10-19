import { buildExecutionContext } from "graphql/execution/execute";
import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/selectors";

export default function Groups({ navigation }) {
  const user = useSelector(selectUser);
  console.log("user in groups component", user);
  return (
    <View>
      <Text>The groups are displayed here</Text>{" "}
      {user.participant.map((g) => {
        return (
          <View key={g.id} style={styles.container}>
            <Text>{g.name}</Text>
            {g.ownerId === user.id ? (
              <View>
                <Button title="delete group"></Button>
              </View>
            ) : null}

            <Image style={styles.tinyImage} source={g.image}></Image>
            <Button
              title="show group"
              onPress={() => navigation.navigate("group", { groupId: g.id })}
            ></Button>
          </View>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: "#7122FA",
  },
  tinyImage: {
    width: 50,
    height: 50,
  },
});
