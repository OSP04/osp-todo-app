import React, { useEffect, useState } from "react";
import { db, storeData } from "./src/db";
import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./DrawerNavigator";


function App() {
  useEffect(() => {
    storeData("tasks", db.tasks);
    storeData("categories", db.categories);
    storeData("users", db.users);
    storeData("comments", db.comments);
  }, []);
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
export default App;
