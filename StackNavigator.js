/* StackNavigator.js */
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import { Provider } from "react-native-paper";
import DrawerNavigator from "./DrawerNavigator";
import CalendarScreen from "./src/screens/CalendarScreen";
const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Provider>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="Home" component={StackNavigator2} />
      </Stack.Navigator>
    </Provider>
  );
};
const StackNavigator2 = () => {
  return (
    <Provider>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="CalendarScreen" component={CalendarScreen} />
        <Stack.Screen name="Home" component={DrawerNavigator} />
      </Stack.Navigator>
    </Provider>
  );
};

export { StackNavigator, StackNavigator2 };
