import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import GroupScreen from "./src/screens/GroupScreen";
import LocationsScreen from "./src/screens/LocationsScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import GroupMembers from "./src/screens/GroupMembers";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import GroupForm from "./src/components/GroupForm";
import store from "./store";
import { Provider } from "react-redux";
const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const client = new ApolloClient({
  uri: "http://192.168.0.15:4000/graphql",
  cache: new InMemoryCache(),
});

function MainMenu() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="groups" component={GroupScreen} />
      <Tab.Screen name="locations" component={LocationsScreen} />
      <Tab.Screen name="New Group" component={GroupForm} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="MainMenu" component={MainMenu} />
            <Stack.Screen name="group" component={GroupMembers} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApolloProvider>
    </Provider>
  );
}

export default App;
