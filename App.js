import React, { useEffect } from "react";
import { db, storeData } from "./src/db";

import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./StackNavigator";
import { ResultContextProvider } from "./src/components/context";

function App() {
  useEffect(() => {
    // Set example of tasks and category
    storeData("tasks", db.tasks);
    storeData("categories", db.categories);
    // Store fake users and comments data when app starts
    storeData("users", db.users);
    storeData("comments", db.comments);
  }, []);

  return (
    <ResultContextProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </ResultContextProvider>
  );
}
export default App;
