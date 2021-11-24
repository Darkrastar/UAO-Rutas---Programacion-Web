import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";


const libraries = ["places"];
const mapContainerStyle = {
  width: "40rem",
  height: "50rem",
};

const center = {
  lat: 3.5259734061669623,
  lng: -76.30414442779177,
};

export default function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApi: "AIzaSyD7lWkx3KdQMiw_YdPvGvfGS9bYMxMX5ik",
    libraries,
  });

  const [markers, setMarkers] = React.useState([]);

  const primerMker = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      setMarkers((current) => [
        ...current,
        {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          time: new Date(),
          
        },
      ]);
      console.log(markers+"HOLAAAAAAAAAAA")
    });
  };

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading";

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={center}
        onClick={(event) => {
          setMarkers((current) => [
            ...current,
            {
              lat: event.latLng.lat(),
              lng: event.latLng.lng(),
              time: new Date(),
            },
          ]);
        }}
      >
        {markers.map((marker) => (
          <Marker
            key={`${marker.lat}-${marker.lng}`}
            position={{ lat: marker.lat, lng: marker.lng }}
          />
        ))}
      </GoogleMap>
    </div>
  );
  
}

