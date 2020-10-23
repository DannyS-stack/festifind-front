import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Text, Button, View, Dimensions } from "react-native";
import * as Location from "expo-location";
import { selectUser } from "../../store/user/selectors";
import { useSelector } from "react-redux";
// import GET_ALL_USERS from "../graphql/query";
// import UPDATE_USER_LOCATION from "../graphql/query";
import { marker } from "../../Images/marker.png";
import { gql, useMutation, useQuery, useSubscription } from "@apollo/client";

export default function LocationScreen() {
  const user = useSelector(selectUser);

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

  const { loading, error, data } = useQuery(GET_ALL_USERS, {
    pollInterval: 500,
  });
  const [updateLocation, { error2 }] = useMutation(UPDATE_USER_LOCATION);

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
  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  if (location) {
    updateLocation({
      variables: {
        id: user.id,
        longitude: location.coords.longitude,
        latitude: location.coords.latitude,
      },
    });
    setLocation(null);
  }

  return (
    <View style={styles.container}>
      <View></View>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude: 52.370216,
          longitude: 4.895168,
          latitudeDelta: 0.1922,
          longitudeDelta: 0.0421,
        }}
      >
        {data
          ? data.allUsers.map((u) => {
              if (u.longitude && u.latitude) {
                return (
                  <Marker
                    key={u.id}
                    coordinate={{
                      longitude: u.longitude,
                      latitude: u.latitude,
                    }}
                    image={marker}
                    title={u.name}
                  ></Marker>
                );
              }
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
