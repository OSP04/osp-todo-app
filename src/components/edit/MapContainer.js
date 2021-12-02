import React from "react";
import PropTypes from "prop-types";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { REACT_APP_GOOGLE_API_KEY } from "@env";

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
        key: REACT_APP_GOOGLE_API_KEY,
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
