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
import AddCategory from "./src/screens/AddCategory";
import { CommonActions } from "@react-navigation/native";
import Comments from "./src/screens/Comments";
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
            <MenuButton>
              <IconButton
                type={images.menu}
                size={32}
                color="black"
                style={styles.menu}
              />
            </MenuButton>
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
          headerLeft: () => (
            <Image source={require("./assets/logo.png")} style={styles.image} />
          ),
          headerTitle: () => null,
          headerRight: () => (
            <RightContainer>
              <TouchableOpacity
                onPress={() =>
                  navigation.dispatch(DrawerActions.jumpTo("SearchScreen"))
                }
              >
                <SearchButton>
                  <IconButton
                    type={images.search}
                    size={32}
                    color="black"
                    style={styles.search}
                  />
                </SearchButton>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  navigation.dispatch(DrawerActions.toggleDrawer())
                }
              >
                <MenuButton>
                  <IconButton
                    type={images.menu}
                    size={32}
                    color="black"
                    style={styles.menu}
                  />
                </MenuButton>
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
              style={{ margin: 15 }}
            >
              <IconButton
                type={images.back}
                size={32}
                color="black"
                style={styles.back}
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
              style={{ margin: 15 }}
            >
              <IconButton
                type={images.back}
                size={32}
                color="black"
                style={styles.back}
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
              style={{ margin: 15 }}
            >
              <RightContainer>
                <MenuButton>
                  <IconButton
                    type={images.back}
                    size={32}
                    color="black"
                    style={styles.back}
                  />
                </MenuButton>
              </RightContainer>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <RightContainer>
              <TouchableOpacity
                onPress={() =>
                  navigation.dispatch(DrawerActions.jumpTo("SearchScreen"))
                }
              >
                <SearchButton>
                  <IconButton
                    type={images.search}
                    size={32}
                    color="black"
                    style={styles.search}
                  />
                </SearchButton>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  navigation.dispatch(DrawerActions.toggleDrawer())
                }
              >
                <MenuButton>
                  <IconButton
                    type={images.menu}
                    size={32}
                    color="black"
                    style={styles.menu}
                  />
                </MenuButton>
              </TouchableOpacity>
            </RightContainer>
          ),
        }}
      />
      <Drawer.Screen
        name="Comments"
        component={Comments}
        options={{
          drawerLabel: "Comments",
          headerTitle: () => <StyledText>Comments</StyledText>,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.jumpTo("Home"))}
              style={{ margin: 15 }}
            >
              <IconButton
                type={images.back}
                size={32}
                color="black"
                style={styles.back}
              />
            </TouchableOpacity>
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
              style={{ margin: 15 }}
            >
              <IconButton
                type={images.back}
                size={32}
                color="black"
                style={styles.back}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <RightContainer>
              {/* <TouchableOpacity
                onPress={() =>
                  navigation.dispatch(CommonActions.navigate("AddCategory"))
                }
              >
                <SearchButton>
                  <IconButton
                    type={images.add}
                    size={32}
                    color="black"
                    style={styles.menu}
                  />
                </SearchButton>
              </TouchableOpacity> */}

              <TouchableOpacity
                onPress={() =>
                  navigation.dispatch(DrawerActions.toggleDrawer())
                }
              >
                <MenuButton>
                  <IconButton
                    type={images.menu}
                    size={32}
                    color="black"
                    style={styles.menu}
                  />
                </MenuButton>
              </TouchableOpacity>
            </RightContainer>
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 35,
    height: 35,
    margin: 10,
  },
  menu: { width: 40, height: 40 },
  search: { width: 40, height: 40 },
  back: { width: 40, height: 40 },
});
const StyledText = styled.Text`
  font-weight: bold;
  font-size: 24px;
`;
const RightContainer = styled.View`
  flex-direction: row;
`;
const MenuButton = styled.View`
  margin-right: 10px;
`;
const SearchButton = styled.View`
  margin-right: 10px;
`;
export default DrawerNavigator;
