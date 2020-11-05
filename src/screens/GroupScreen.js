import React from "react";
import { View, ScrollView } from "react-native";
import Groups from "../components/Groups";
import { selectUser } from "../../store/user/selectors";
import { useSelector } from "react-redux";

export default function GroupScreen({ navigation }) {
  const user = useSelector(selectUser);
  selectUser;
  return (
    <ScrollView>
      <View>
        <Groups navigation={navigation} />
      </View>
    </ScrollView>
  );
}
