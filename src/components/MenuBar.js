import React, { Component, useRef } from "react";
import ScrollableTabView, {
  ScrollableTabBar,
} from "react-native-scrollable-tab-view";

import { theme } from "../../src/theme";
import AchievementCategory from "./achievement/AchievementCategory";
import AchievementDay from "./achievement/AchievementDay";

const MenuBar = () => {
  const ref = useRef("");

  return (
    <ScrollableTabView
      ref={ref}
      renderTabBar={() => <ScrollableTabBar style={{ marginBottom: 10 }} />}
      tabBarInactiveTextColor={theme.light}
      tabBarActiveTextColor={theme.primary}
      initialPage={0}
    >
      <AchievementCategory tabLabel={"Category"} />
      <AchievementDay tabLabel={"Day"} />
    </ScrollableTabView>
  );
}

export default MenuBar;