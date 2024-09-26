import React, { useState } from "react";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import { Link } from "react-router-dom";

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

// Define marker type
interface MarkerType {
  title: string;
  from: string;
  image: string;
  type: string;
  longlat: {
    lat: number;
    lng: number;
  };
}

const dataMarker = [
  {
    title: "Tari Saman",
    from: "Nanggoroe Aceh Darussalam",
    image: "tariSaman.jpg",
    type: "tarian",
    longlat: {
      lat: -6.987725,
      lng: 108.5381052,
    },
  },
];

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

  const [selectedMarker, setSelectedMarker] = useState<MarkerType | null>(null);

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
        {dataMarker.map((marker, i) => (
          <Marker
            key={i}
            position={{
              lat: marker.longlat.lat,
              lng: marker.longlat.lng,
            }}
            onClick={() => setSelectedMarker(marker)}
            icon={{
              url: `/restaurants/1.jpg`, // Ganti dengan URL gambar kustom Anda
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
            <div className="bg-white rounded text-center">
              <img
                src={`./images/mapMarker/${selectedMarker.image}`}
                width={200}
                height={200}
                className="object-cover"
              />
              <h1 className="font-bold text-xl text-gray-800 mt-3">
                {selectedMarker.title}
              </h1>
              <small className="text-gray-600">{selectedMarker.from}</small>
              <br />
              {selectedMarker.type === "makanan" ? (
                <Link
                  to={"/ragam-indonesia/makanan/detail"}
                  className="bg-orange-500 inline-block text-white hover:bg-orange-400 rounded px-8 py-2 mt-5"
                >
                  Baca Selengkapnya
                </Link>
              ) : (
                <Link
                  to={"/ragam-indonesia/tarian/detail"}
                  className="bg-purple-500 inline-block text-white hover:bg-purple-400 rounded px-8 py-2 mt-5"
                >
                  Baca Selengkapnya
                </Link>
              )}
            </div>
          </InfoWindow>
        )}
      </>
    </GoogleMap>
  ) : null;
}

export default React.memo(LocationMapSection);
