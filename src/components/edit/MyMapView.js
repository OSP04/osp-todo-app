import React from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import PropTypes from "prop-types";

const MyMapView = ({ region }) => {
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      showsMyLocationButton={true}
    >
      <Marker
        coordinate={{
          latitude: region.latitude,
          longitude: region.longitude,
        }}
      />
    </MapView>
  );
};
MyMapView.propTypes = {
  onRegionChange: PropTypes.func,
};

export default MyMapView;
