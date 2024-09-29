import React, { useState } from "react";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";

import restaurants from "./../../../data/restaurants.json";
import { Restaurant } from "../../../models/Resturant";

const containerStyle = {
  width: "100%",
  height: "700px",
};

// Pusat peta
const center = {
  lat: -7.0, // Center di sekitar Pulau Jawa
  lng: 110.0, // Pusat di sekitar Pulau Jawa
};

// Batas koordinat wilayah Indonesia
const indonesiaBounds = {
  north: 1.5, // Bagian utara Kalimantan
  south: -10.5, // Bagian selatan Jawa Tengah
  west: 105.0, // Bagian barat Jakarta
  east: 115.5, // Bagian timur Kalimantan
};

// Dark mode style
const darkModeStyle = [
  { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#263c3f" }],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#6b9a76" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#38414e" }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#212a37" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9ca5b3" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#746855" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#1f2835" }],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{ color: "#f3d19c" }],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#2f3948" }],
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#17263c" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#515c6d" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#17263c" }],
  },
];

function LocationMapSection() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBKDtW47ZKzT5JPduQvi3gUFNHNZmXk-FU",
  });

  const [selectedMarker, setSelectedMarker] = useState<Restaurant | null>(null);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      options={{
        disableDefaultUI: true,
        keyboardShortcuts: false,
        restriction: {
          latLngBounds: indonesiaBounds,
          strictBounds: true,
        },
        styles: darkModeStyle, // Apply dark mode style here
      }}
      zoom={6}
    >
      <>
        {restaurants.map((restaurant, i) => (
          <Marker
            key={i}
            position={{
              lat: restaurant.longlat.lat,
              lng: restaurant.longlat.lng,
            }}
            onClick={() => setSelectedMarker(restaurant)}
            icon={{
              url: `/restaurants/${restaurant.img}`, // Ganti dengan URL gambar kustom Anda
              scaledSize: new window.google.maps.Size(40, 40), // Ukuran yang sama untuk lebar dan tinggi
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(20, 20),
            }}
            // Untuk memastikan tampil bulat, gunakan CSS pada elemen image-nya
            shape={{
              coords: [40, 40, 40], // Membuatnya menjadi bulat
              type: "circle",
            }}
          />
        ))}

        {selectedMarker && (
          <InfoWindow
            position={{
              lat: selectedMarker.longlat.lat,
              lng: selectedMarker.longlat.lng,
            }}
            onCloseClick={() => setSelectedMarker(null)}
          >
            <div className="bg-[#0e1317] p-4 rounded text-center">
              <img
                src={`/restaurants/${selectedMarker.img}`}
                width={200}
                height={200}
                className="object-cover rounded-md mx-auto"
              />
              <h6 className="font-medium mb-2 text-xl text-gray-200 mt-3">
                {selectedMarker.name}
              </h6>
              <p className="text-gray-300 w-3/4 mx-auto">
                {selectedMarker.description}
              </p>
              <br />
              <button className="px-7 py-2 rounded-md text-white  border-2 border-[#bc8b57]/80 bg-[#bc8b57]/80 hover:bg-[#bc8b57] hover:text-white font-medium">
                Detail Lokasi
              </button>
              <br />
              <br />
            </div>
          </InfoWindow>
        )}
      </>
    </GoogleMap>
  ) : null;
}

export default React.memo(LocationMapSection);
