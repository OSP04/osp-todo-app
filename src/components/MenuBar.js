import React, { Component } from "react";
import ScrollableTabView, { ScrollableTabBar } from "react-native-scrollable-tab-view";

import styled from "styled-components/native";
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
                tabBarTextStyle={TabBarText}
                tabBarInactiveTextColor={theme.light}
                tabBarActiveTextColor={theme.primary}
                tabBarUnderlineStyle={Underline}
                initialPage={1}
            >
                <AchievementCategory tabLabel={"Category"} />
                <AchievementDay tabLabel={"Day"} />

            </ScrollableTabView>
        );
    }
}

const TabBarText = styled.Text`
color: ${theme.primary};
font-weight: bold;
font-size: 22px;
padding-left: 20px;
`;

const Underline = styled.View`
background-color: ${theme.primary};
height: 4px;
margin-top: 4px;
margin-left: 14px;
`;