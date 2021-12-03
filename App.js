import React, { useEffect, useState } from "react";
import { Provider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
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
import { db, storeData } from "./src/db";
import { theme } from "./src/theme";

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    storeData("tasks", db.tasks);
    storeData("categories", db.categories);
    storeData("users", db.users);
    storeData("comments", db.comments);
  }, []);

  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LoginScreen"
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
      </NavigationContainer>
    </Provider>
  );
}
