import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { mapConfig } from "../../util/mapConfigaration";
import car from "../../assets/images/map-marker.svg";
import Geocode from "react-geocode";

function MapView({ mapData, google, getaddress }) {
  const mapPoints = () => {
    return mapData.map((item, index) => {
      return (
        <Marker
          position={{
            lat: item.latitude,
            lng: item.longitude,
          }}
          icon={car}
          onClick={() => markerClick(item.latitude, item.longitude)}
        ></Marker>
      );
    });
  };

  const markerClick = (lat, lon) => {
    Geocode.setApiKey(mapConfig.apiKey);
    Geocode.fromLatLng(lat, lon).then(
      (response) => {
        const address = response.results[0].formatted_address;
        // message.success(address, 3);
        const values = { place: address, isvisible: true };
        getaddress(values);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <Map
      google={google}
      zoom={mapConfig.zoom}
      style={mapConfig.mapStyles}
      initialCenter={mapConfig.initialCenter}
      disableDefaultUI={true}
      zoomControl={true}
    >
      {mapPoints()}
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: mapConfig.apiKey,
})(MapView);
