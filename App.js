import React, { useEffect } from "react";
import { db, storeData } from "./src/db";

import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./StackNavigator";
import { ResultContextProvider } from "./src/components/context";

function App() {
  useEffect(() => {
    storeData("tasks", db.tasks);
    storeData("categories", db.categories);
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
