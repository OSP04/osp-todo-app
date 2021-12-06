import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import Achievement from "./src/screens/Achievement";
import AllTasks from "./src/screens/AllTasks";
import Home from "./src/screens/Home";
import AllCategory from "./src/screens/AllCategory";
import SearchScreen from "./src/screens/SearchScreen";
import { Image, StyleSheet } from "react-native";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
        drawerPosition: "left",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerLabel: "Home",
          headerTitle: () => (
            <Image source={require("./assets/logo.png")} style={styles.image} />
          ),
        }}
      />

      <Drawer.Screen
        name="Achievement"
        component={Achievement}
        options={{
          drawerLabel: "Achievement",
          headerTitle: () => (
            <Image source={require("./assets/logo.png")} style={styles.image} />
          ),
        }}
      />
      <Drawer.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          drawerLabel: "Search",
          headerTitle: () => (
            <Image source={require("./assets/logo.png")} style={styles.image} />
          ),
        }}
      />
      <Drawer.Screen
        name="AllTasks"
        component={AllTasks}
        options={{
          drawerLabel: "AllTasks",
          headerTitle: () => (
            <Image source={require("./assets/logo.png")} style={styles.image} />
          ),
        }}
      />

      <Drawer.Screen
        name="AllCategory"
        component={AllCategory}
        options={{
          drawerLabel: "Category",
          headerTitle: () => (
            <Image source={require("./assets/logo.png")} style={styles.image} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
});

export default DrawerNavigator;
