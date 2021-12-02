import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
  Button,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Entypo } from "@expo/vector-icons";
import { theme } from "../../theme";
import CommonModal from "../common/CommonModal";
import MapContainer from "./MapContainer";

const latitudeDelta = 0.004;
const longitudeDelta = 0.004;

const EditLocation = ({}) => {
  const [location, setLocation] = useState("");
  const [isMapSelected, setIsMapSelected] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [locationData, setLocationData] = useState({
    mainText: "",
    address: "",
  });

  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  const [addressPicker, setAddressPicker] = useState({
    region: {
      latitude: 35.91395373474155,
      longitude: 127.73829440215488,
      latitudeDelta,
      longitudeDelta,
    },
    listViewDisplayed: false,
    mainText: "",
  });

  useEffect(() => {
    getInitialState();
  }, []);

  const getInitialState = () => {
    setAddressPicker({
      region: {
        latitude: 35.91395373474155,
        longitude: 127.73829440215488,
        latitudeDelta,
        longitudeDelta,
      },
      listViewDisplayed: false,
      mainText: "",
    });
  };

  const getCoordsFromName = (loc) => {
    setAddressPicker({
      region: {
        latitude: loc.lat,
        longitude: loc.lng,
        latitudeDelta,
        longitudeDelta,
      },
    });
  };

  const onMapContainerPressed = (data, details = null) => {
    setAddressPicker({
      listViewDisplayed: false,
      region: {
        latitudeDelta,
        longitudeDelta,
        latitude: details.geometry.location.lat,
        longitude: details.geometry.location.lng,
      },
    });
    setLocationData({
      mainText: data.structured_formatting.main_text,
      address: data.description,
    });
    getCoordsFromName(details.geometry.location);
    setIsMapSelected(true);
    setShowModal(false);
    console.log(addressPicker.region);
  };

  return (
    <View>
      <CommonModal
        showModal={showModal}
        setShowModal={setShowModal}
        headerText="Map"
        onCancelPressed={() => setShowModal(false)}
      >
        <View>
          <View style={styles.searchMap}>
            <MapContainer
              onPress={(data, details = null) =>
                onMapContainerPressed((data, (details = null)))
              }
            />
          </View>
        </View>
      </CommonModal>
      <View
        style={
          isMapSelected
            ? { ...styles.listItem, borderBottomWidth: 0 }
            : styles.listItem
        }
      >
        <Entypo
          name="location-pin"
          style={styles.icon}
          size={24}
          color="black"
        />
        <TextInput
          style={styles.input}
          placeholder="Location"
          value={isMapSelected ? locationData.mainText : location}
          onChangeText={(location) => setLocation(location)}
        />
        {isMapSelected ? (
          <Pressable
            onPress={() => {
              setIsMapSelected(false);
              getInitialState();
              setLocation("");
            }}
          >
            <Entypo name="cross" style={styles.icon} size={20} color="black" />
          </Pressable>
        ) : (
          <Pressable onPress={openModal}>
            <Entypo name="map" style={styles.icon} size={20} color="black" />
          </Pressable>
        )}
      </View>
      {isMapSelected && (
        <View style={styles.mapContainer}>
          <MapView style={styles.map} region={addressPicker.region}>
            <Marker
              coordinate={{
                latitude: addressPicker.region.latitude,
                longitude: addressPicker.region.longitude,
              }}
            />
          </MapView>
          <Text style={styles.address}>{locationData.address}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  leftItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  searchMap: {
    width: 300,
    height: 250,
    marginBottom: 40,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    justifyContent: "space-between",
  },
  icon: {
    padding: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: theme.colors.surface,
    color: "#424242",
  },
  maintext: {
    fontWeight: "bold",
    padding: 10,
    backgroundColor: theme.colors.surface,
    color: "#424242",
  },
  map: {
    width: 120,
    height: 90,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  mapContainer: {
    flexDirection: "row",
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  address: {
    marginBottom: 10,
    marginHorizontal: 5,
    flexShrink: 1,
  },
});

export default EditLocation;
