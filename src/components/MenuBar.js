import React, { Component } from "react";
import ScrollableTabView, { ScrollableTabBar } from "react-native-scrollable-tab-view";

import { theme } from "../theme";
import AchievementCategory from "./AchievementCategory";
import AchievementDay from "./AchievementDay";


export default class MenuBar extends Component {
    render() {
        return (
            <ScrollableTabView
                renderTabBar={() => (
                    <ScrollableTabBar
                        style={{ marginBottom: 10 }} />
                )}
                tabBarInactiveTextColor={theme.light}
                tabBarActiveTextColor={theme.primary}
                initialPage={1}
            >
                <AchievementCategory tabLabel={"Category"} />
                <AchievementDay tabLabel={"Day"} />

            </ScrollableTabView>
        );
    }
}