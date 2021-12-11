import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import Achievement from "./src/screens/Achievement";
import AllTasks from "./src/screens/AllTasks";
import Home from "./src/screens/Home";
import AllCategory from "./src/screens/AllCategory";
import SearchScreen from "./src/screens/SearchScreen";
import { Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View } from "react-native";
import IconButton from "./src/components/common/IconButton";
import { images } from "./src/images";
import { DrawerActions } from "@react-navigation/native";
import styled from "styled-components/native";
const Drawer = createDrawerNavigator();

const DrawerNavigator = ({ navigation }) => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
        drawerPosition: "right",
        headerRight: () => (
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          >
            <IconButton
              type={images.menu}
              size={32}
              color="black"
              style={styles.menu}
            />
          </TouchableOpacity>
        ),
        headerLeft: () => <TouchableOpacity></TouchableOpacity>,
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
          headerRight: () => (
            <RightContainer>
              <TouchableOpacity
                onPress={() =>
                  navigation.dispatch(DrawerActions.jumpTo("SearchScreen"))
                }
              >
                <IconButton
                  type={images.search}
                  size={32}
                  color="black"
                  style={styles.menu}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.dispatch(DrawerActions.toggleDrawer())
                }
              >
                <IconButton
                  type={images.menu}
                  size={32}
                  color="black"
                  style={styles.menu}
                />
              </TouchableOpacity>
            </RightContainer>
          ),
        }}
      />

      <Drawer.Screen
        name="Achievement"
        component={Achievement}
        options={{
          drawerLabel: "Achievement",
          headerTitle: () => <StyledText>Achievement</StyledText>,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.jumpTo("Home"))}
            >
              <IconButton
                type={images.back}
                size={32}
                color="black"
                style={styles.menu}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Drawer.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          drawerLabel: "Search",
          headerTitle: () => <StyledText>Search</StyledText>,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.jumpTo("Home"))}
            >
              <IconButton
                type={images.back}
                size={32}
                color="black"
                style={styles.menu}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Drawer.Screen
        name="AllTasks"
        component={AllTasks}
        options={{
          drawerLabel: "AllTasks",
          headerTitle: () => <StyledText>AllTasks</StyledText>,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.jumpTo("Home"))}
            >
              <IconButton
                type={images.back}
                size={32}
                color="black"
                style={styles.menu}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <RightContainer>
              <TouchableOpacity
                onPress={() =>
                  navigation.dispatch(DrawerActions.jumpTo("SearchScreen"))
                }
              >
                <IconButton
                  type={images.search}
                  size={32}
                  color="black"
                  style={styles.menu}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.dispatch(DrawerActions.toggleDrawer())
                }
              >
                <IconButton
                  type={images.menu}
                  size={32}
                  color="black"
                  style={styles.menu}
                />
              </TouchableOpacity>
            </RightContainer>
          ),
        }}
      />

      <Drawer.Screen
        name="AllCategory"
        component={AllCategory}
        options={{
          drawerLabel: "Category",
          headerTitle: () => <StyledText>Category</StyledText>,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.jumpTo("Home"))}
            >
              <IconButton
                type={images.back}
                size={32}
                color="black"
                style={styles.menu}
              />
            </TouchableOpacity>
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
const StyledText = styled.Text`
  font-weight: bold;
  font-size: 24px;
`;
const RightContainer = styled.View`
  flex-direction: row;
  font-weight: bold;
  font-size: 24px;
`;
export default DrawerNavigator;
