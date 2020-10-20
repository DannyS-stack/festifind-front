import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Text, Button, View, Dimensions } from "react-native";
import * as Location from "expo-location";
import { useQuery } from "@apollo/client";
// import GET_ALL_USERS from "../graphql/query";
// import UPDATE_USER_LOCATION from "../graphql/query";
import { marker } from "../../Images/marker.png";
import { onChange } from "react-native-reanimated";
import { gql, useMutation } from "@apollo/client";

export default function LocationScreen() {
  const GET_ALL_USERS = gql`
    query allUsers {
      allUsers {
        id
        email
        name
        image
        username
        longitude
        latitude
      }
    }
  `;
  const UPDATE_USER_LOCATION = gql`
    mutation updateLocation($id: Int, $longitude: Float, $latitude: Float) {
      updateLocation(id: $id, longitude: $longitude, latitude: $latitude) {
        username
        longitude
        latitude
      }
    }
  `;

  const { error, data } = useQuery(GET_ALL_USERS, {
    pollInterval: 500,
  });
  console.log(data);
  const [updateLocation, { error2 }] = useMutation(UPDATE_USER_LOCATION);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);
  console.log(location);
  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  location ? setLoading(false) : null;

  !loading
    ? setInterval(function () {
        updateLocation({
          variables: {
            id: 1,
            longitude: location.coords.longitude,
            latitude: location.coords.latitude,
          },
        });
      }, 3000)
    : null;

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 200 }}>
        <Button
          title={"update location"}
          onPress={() => {
            updateLocation({
              variables: {
                id: 1,
                longitude: location.coords.longitude,
                latitude: location.coords.latitude,
              },
            });
          }}
        ></Button>
      </View>
      <MapView style={styles.mapStyle}>
        {data
          ? data.allUsers.map((u) => {
              return (
                <Marker
                  coordinate={{ longitude: u.longitude, latitude: u.latitude }}
                  image={marker}
                  title={u.name}
                ></Marker>
              );
            })
          : null}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
