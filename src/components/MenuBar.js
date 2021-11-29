import React, { Component } from "react";
import ScrollableTabView, {
  ScrollableTabBar,
} from "react-native-scrollable-tab-view";

import { theme } from "../../src/theme";
import AchievementCategory from "./achievement/AchievementCategory";
import AchievementDay from "./achievement/AchievementDay";

export default class MenuBar extends Component {
  render() {
    return (
      <ScrollableTabView
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
}
