import React, { useEffect } from "react";
import { db, storeData } from "./src/db";

import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./StackNavigator";
function App() {
  useEffect(() => {
    storeData("tasks", db.tasks);
    storeData("categories", db.categories);
    storeData("users", db.users);
    storeData("comments", db.comments);
  }, []);

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
export default App;
