import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const MapContainer = ({ onPress }) => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Search"
      minLength={2} // minimum length of text to search
      autoFocus={true}
      returnKeyType={"search"} // Can be left out for default return key
      listViewDisplayed={false} // true/false/undefined
      fetchDetails={true}
      onPress={onPress}
      query={{
        key: "AIzaSyAUaRmEc-zPLrjIyuBLYyCq4u3QF1LM1kI",
        language: "en",
      }}
      nearbyPlacesAPI="GooglePlacesSearch"
      debounce={100}
    />
  );
};

MapContainer.propTypes = {
  onPress: PropTypes.func,
};

export default MapContainer;
