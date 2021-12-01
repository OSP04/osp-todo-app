import React from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import PropTypes from "prop-types";

const MyMapView = ({ region, onRegionChange }) => {
  return (
    <MapView
      style={{ flex: 1, width: 250 }}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      showsMyLocationButton={true}
      onRegionChange={(reg) => onRegionChange(reg)}
    >
      <Marker coordinate={region} />
    </MapView>
  );
};
MyMapView.propTypes = {
  onRegionChange: PropTypes.func,
};

export default MyMapView;
