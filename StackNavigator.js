/* StackNavigator.js */
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import EditScreen from "./src/screens/EditScreen";
import Home from "./src/screens/Home";
import Achievement from "./src/screens/Achievement";
import Comments from "./src/screens/Comments";
import AllTasks from "./src/screens/AllTasks";
import SearchScreen from "./src/screens/SearchScreen";
import CalendarScreen from "./src/screens/CalendarScreen";
import AllCategory from "./src/screens/AllCategory";
import OneCategory from "./src/screens/OneCategory";
import { Provider } from "react-native-paper";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Provider>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="EditScreen" component={EditScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Achievement" component={Achievement} />
        <Stack.Screen name="Comments" component={Comments} />
        <Stack.Screen name="AllTasks" component={AllTasks} />
        <Stack.Screen name="CalendarScreen" component={CalendarScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="AllCategory" component={AllCategory} />
        <Stack.Screen name="OneCategory" component={OneCategory} />
      </Stack.Navigator>
    </Provider>
  );
};

export { StackNavigator };
