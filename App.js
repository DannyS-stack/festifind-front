import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import GroupScreen from "./src/screens/GroupScreen";
import LocationsScreen from "./src/screens/LocationsScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider, gql } from "@apollo/client";
const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query {
        allUsers {
          id
          username
        }
      }
    `,
  })
  .then((result) => console.log("hello +", result))
  .catch((result) => console.log("hello +", result));

function MainMenu() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="groups" component={GroupScreen} />
      <Tab.Screen name="locations" component={LocationsScreen} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="MainMenu" component={MainMenu} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}

export default App;
