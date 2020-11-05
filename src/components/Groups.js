import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/selectors";

export default function Groups({ navigation }) {
  const user = useSelector(selectUser);
  return (
    <ScrollView style={{ backgroundColor: "#4e779c" }}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 25,
          margin: 30,
          borderBottomWidth: 2,
          borderBottomColor: "#eb8407",
          color: "#fff",
        }}
      >
        welcome back {user.name}
      </Text>
      <View style={styles.container}>
        {user.participant.map((g) => {
          return (
            <View
              style={{
                flexDirection: "row",
                marginBottom: 20,
                borderBottomWidth: 2,
                borderBottomColor: "#eb8407",
              }}
              key={g.id}
            >
              <Text style={styles.textStyle}>{g.name}</Text>
              {g.ownerId === user.id ? (
                <TouchableOpacity style={styles.button2}>
                  <Text style={styles.buttonText}>Delete </Text>
                </TouchableOpacity>
              ) : null}
              <TouchableOpacity
                style={styles.button1}
                onPress={() => navigation.navigate("group", { groupId: g.id })}
              >
                <Text style={styles.buttonText}>Show </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    margin: 25,
    padding: 10,
    flex: 1,
    borderRadius: 8,
  },
  tinyImage: {
    width: 50,
    height: 50,
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
