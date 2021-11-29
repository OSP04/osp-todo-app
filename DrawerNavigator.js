import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import Achievement from "./src/screens/Achievement";
import { StackNavigator } from "./StackNavigator";
import CalendarScreen from "./src/screens/CalendarScreen";
import AllTasks from "./src/screens/AllTasks";
import AddCategory from "./src/screens/AddCategory";
import AllCategory from "./src/screens/AllCategory";
import SearchScreen from "./src/screens/SearchScreen";
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        headerShown: false,
        drawerPosition: "right",
      }}
    >
      <Drawer.Screen
        name="LoginScreen"
        component={StackNavigator}
        options={{ drawerLabel: "LoginScreen" }}
      />
      <Drawer.Screen
        name="Achievement"
        component={Achievement}
        options={{ drawerLabel: "Achievement" }}
      />
      <Drawer.Screen
        name="CalendarScreen"
        component={CalendarScreen}
        options={{ drawerLabel: "CalendarScreen" }}
      />
      <Drawer.Screen
        name="AllTasks"
        component={AllTasks}
        options={{ drawerLabel: "AllTasks" }}
      />
      <Drawer.Screen
        name="AddCategory"
        component={AddCategory}
        options={{ drawerLabel: "AddCategory" }}
      />
      <Drawer.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{ drawerLabel: "SearchScreen" }}
      />
      <Drawer.Screen
        name="AllCategory"
        component={AllCategory}
        options={{ drawerLabel: "AllCategory" }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
