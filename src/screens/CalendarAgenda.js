import React, { useState } from "react";
import { Agenda } from "react-native-calendars";
import { Alert, View, Text, TouchableOpacity } from "react-native";
import { Card, Avatar } from "react-native-paper";

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split("T")[0];
};
export default AgendaScreen = () => {
  const [items, setItems] = useState({});
  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: "Item for " + strTime + " #" + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };
  const renderItem = (item) => {
    return (
      <TouchableOpacity
        style={{ marginRight: 10, marginTop: 17 }}
        onPress={() => Alert.alert(item.name)}
        //나중에 onpress 화면이동설정
      >
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text>{item.name}</Text>
              <Avatar.Text label="J" />
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };
  const renderEmptyDate = () => {
    return (
      <View>
        <Text style={styles.emptyDate}>This is empty date!</Text>
      </View>
    );
  };
  const unformattedCurrent = new Date();
  const year = unformattedCurrent.getFullYear();
  const month = unformattedCurrent.getMonth() + 1;
  const date = unformattedCurrent.getDate();
  const current = `${year}-${month >= 10 ? month : "0" + month}-${
    date >= 10 ? date : "0" + date
  }`;
  return (
    <View style={{ flex: 1 }}>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={current}
        renderItem={renderItem}
        renderEmptyDate={renderEmptyDate}
        // renderEmptyDate={this.renderEmptyDate.bind(this)}
        // rowHasChanged={this.rowHasChanged.bind(this)}
        pastScrollRange={12}
        // Max amount of months allowed to scroll to the future. Default = 50
        futureScrollRange={12}
        // Specify how each item should be rendered in agenda
        showClosingKnob={true}
        hideExtraDays={false}
      />
    </View>
  );
};
