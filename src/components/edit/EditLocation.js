import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
  Dimensions,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Entypo } from "@expo/vector-icons";
import { theme } from "../../theme";
import CommonModal from "../common/CommonModal";
import MapContainer from "./MapContainer";
import EditTaskContext from "../../context/EditTask";

const latitudeDelta = 0.004;
const longitudeDelta = 0.004;

const EditLocation = () => {
  const { editingTask, isAddPressed, updateLocation } =
    useContext(EditTaskContext);

  const [location, setLocation] = useState("");
  const [locationData, setLocationData] = useState({
    mainText: "",
    address: "",
  });
  const [isMapSelected, setIsMapSelected] = useState(false);
  const [addressPicker, setAddressPicker] = useState({
    region: {
      latitude: 35.91395373474155,
      longitude: 127.73829440215488,
      latitudeDelta,
      longitudeDelta,
    },
    listViewDisplayed: false,
  });

  useEffect(() => {
    if (editingTask.location !== null || isAddPressed !== true) {
      if (Object.entries(editingTask.location.region).length !== 0) {
        setLocationData(editingTask.location.locationData);
        setAddressPicker({
          ...addressPicker,
          region: editingTask.location.region,
        });
        setLocation(editingTask.location.text);
      } else if (
        editingTask.location.text !== null ||
        editingTask.location.text !== ""
      ) {
        setLocation(editingTask.location.text);
      }
    }
  }, []);

  const [todo, setTodo] = useState(editingTask);

  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const [showFullMap, setShowFullMap] = useState(false);
  const openFullMap = () => {
    setShowFullMap((prev) => !prev);
  };

  const getInitialState = () => {
    setLocation("");
    setAddressPicker({
      region: {
        latitude: 35.91395373474155,
        longitude: 127.73829440215488,
        latitudeDelta,
        longitudeDelta,
      },
      listViewDisplayed: false,
    });
    updateLocation({
      text: "",
      region: {},
      locationData: { mainText: "", address: "" },
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

  const onMapContainerPressed = (data, details) => {
    setAddressPicker({
      listViewDisplayed: false,
      region: {
        latitude: details.geometry.location.lat,
        longitude: details.geometry.location.lng,
        latitudeDelta,
        longitudeDelta,
      },
    });
    setLocationData({
      mainText: data.structured_formatting.main_text,
      address: data.description,
    });
    getCoordsFromName(details.geometry.location);
    setIsMapSelected(true);
    updateLocation({
      text: data.structured_formatting.main_text,
      region: {
        latitude: details.geometry.location.lat,
        longitude: details.geometry.location.lng,
        latitudeDelta,
        longitudeDelta,
      },
      locationData: {
        mainText: data.structured_formatting.main_text,
        address: data.description,
      },
    });
    setShowModal(false);
  };

  return (
    <View>
      <CommonModal
        showModal={showModal}
        setShowModal={setShowModal}
        headerText="Map"
        onCancelPressed={() => setShowModal(false)}
      >
        <View style={styles.searchMap}>
          <MapContainer
            onPress={(data, details = null) =>
              onMapContainerPressed(data, details)
            }
          />
        </View>
      </CommonModal>
      <CommonModal
        showModal={showFullMap}
        setShowModal={setShowFullMap}
        headerText={locationData.mainText}
        onCancelPressed={() => setShowFullMap(false)}
      >
        <View style={styles.fullmapContainer}>
          <MapView
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            showsMyLocationButton={true}
            region={addressPicker.region}
            style={styles.fullmap}
            moveOnMarkerPress={true}
          >
            <Marker
              coordinate={{
                latitude: addressPicker.region.latitude,
                longitude: addressPicker.region.longitude,
              }}
            />
          </MapView>
          <View style={{ margin: 5 }}>
            <View style={styles.addressHeader}>
              <Entypo
                name="location-pin"
                style={styles.icon}
                size={24}
                color="black"
              />
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>Address</Text>
            </View>
            <Text style={{ padding: 10, flexShrink: 1 }}>
              {locationData.address}
            </Text>
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
          editable={isMapSelected ? false : true}
          onEndEditing={() => {
            updateLocation({
              text: location,
            });
          }}
        />
        {isMapSelected ? (
          <Pressable
            onPress={() => {
              setIsMapSelected(false);
              getInitialState();
            }}
          >
            <Entypo name="cross" style={styles.icon} size={24} color="black" />
          </Pressable>
        ) : (
          <Pressable onPress={openModal}>
            <Entypo name="map" style={styles.icon} size={20} color="black" />
          </Pressable>
        )}
      </View>
      {isMapSelected && (
        <Pressable style={styles.mapContainer} onPress={openFullMap}>
          <MapView
            style={styles.map}
            region={addressPicker.region}
            pitchEnabled={false}
            rotateEnabled={false}
            scrollEnabled={false}
            zoomEnabled={false}
            zoomTapEnabled={false}
          >
            <Marker
              coordinate={{
                latitude: addressPicker.region.latitude,
                longitude: addressPicker.region.longitude,
              }}
            />
          </MapView>
          <Text style={styles.address}>{locationData.address}</Text>
        </Pressable>
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
    width: Dimensions.get("window").width * 0.8,
    height: Dimensions.get("window").height * 0.68,
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
  fullmapContainer: {
    width: Dimensions.get("window").width * 0.8,
    height: Dimensions.get("window").height * 0.68,
  },
  fullmap: {
    width: Dimensions.get("window").width * 0.8,
    height: Dimensions.get("window").height * 0.55,
    marginBottom: 10,
  },
  addressHeader: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
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
