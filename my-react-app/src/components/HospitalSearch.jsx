// import { useState } from "react";

// function HospitalSearch() {
//     const [hospitals, setHospitals] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState("");

//     const findNearestHospitals = () => {
//         if (!navigator.geolocation) {
//             setError("Geolocation is not supported by your browser.");
//             return;
//         }

//         setLoading(true);
//         setError("");

//         navigator.geolocation.getCurrentPosition(
//             async (position) => {
//                 const { latitude, longitude } = position.coords;

//                 // Nominatim API to search for hospitals
//                 const url = `https://nominatim.openstreetmap.org/search?format=json&q=hospital&limit=10&bounded=1&viewbox=${longitude-0.1},${latitude+0.1},${longitude+0.1},${latitude-0.1}`;

//                 try {
//                     const response = await fetch(url);
//                     const data = await response.json();

//                     if (data.length > 0) {
//                         setHospitals(data);
//                     } else {
//                         setError("No hospitals found nearby.");
//                     }
//                 } catch (err) {
//                     setError("Failed to fetch hospital data.");
//                 }

//                 setLoading(false);
//             },
//             () => {
//                 setError("Unable to retrieve your location.");
//                 setLoading(false);
//             }
//         );
//     };

//     return (
//         <div className="p-6">
//             <button 
//                 onClick={findNearestHospitals} 
//                 className="bg-pink-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-pink-600 transition"
//             >
//                 Find Nearest Hospitals
//             </button>

//             {loading && <p className="mt-4 text-black">Searching for hospitals...</p>}
//             {error && <p className="mt-4 text-red-500">{error}</p>}

//             <ul className="mt-6 space-y-4">
//                 {hospitals.map((hospital, index) => (
//                     <li key={index} className="p-4 bg-white shadow-md rounded-lg">
//                         <h3 className="text-lg font-bold">{hospital.display_name}</h3>
//                         <p className="text-gray-600">
//                             {hospital.address && hospital.address.road}, {hospital.address && hospital.address.city}
//                         </p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default HospitalSearch;
import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix Leaflet marker icons
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function HospitalSearch() {
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [userLocation, setUserLocation] = useState(null);

  const findNearestHospitals = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    setLoading(true);
    setError("");

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation([latitude, longitude]);

        const url = `https://nominatim.openstreetmap.org/search?format=json&q=hospital&limit=10&bounded=1&viewbox=${longitude - 0.1},${latitude + 0.1},${longitude + 0.1},${latitude - 0.1}`;

        try {
          const response = await fetch(url);
          const data = await response.json();

          if (data.length > 0) {
            setHospitals(data);
          } else {
            setError("No hospitals found nearby.");
          }
        } catch (err) {
          setError("Failed to fetch hospital data.");
        }

        setLoading(false);
      },
      () => {
        setError("Unable to retrieve your location.");
        setLoading(false);
      }
    );
  };

  const MapUpdater = ({ center }) => {
    const map = useMap();
    if (center) map.setView(center, 13);
    return null;
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-gray-100">
      <div className="flex flex-col items-center justify-center p-6 bg-white shadow-md z-10">
        <h2 className="text-4xl font-bold text-pink-600 mb-4 text-center">
          Find Nearest Hospitals
        </h2>

        <button
          onClick={findNearestHospitals}
          className="bg-pink-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-pink-600 transition"
        >
          Locate Me & Show Hospitals
        </button>

        {loading && <p className="mt-3 text-gray-700">🔍 Searching for hospitals...</p>}
        {error && <p className="mt-3 text-red-500">{error}</p>}
      </div>

      {/* Main map & hospital list layout */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2">
        {/* Map Full Height */}
        <div className="h-full w-full">
          {userLocation && (
            <MapContainer
              center={userLocation}
              zoom={13}
              scrollWheelZoom={false}
              className="h-full w-full z-0"
            >
              <MapUpdater center={userLocation} />
              <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={userLocation}>
                <Popup>Your Location</Popup>
              </Marker>

              {hospitals.map((hospital, index) => (
                <Marker
                  key={index}
                  position={[hospital.lat, hospital.lon]}
                >
                  <Popup>{hospital.display_name}</Popup>
                </Marker>
              ))}
            </MapContainer>
          )}
        </div>

        {/* Hospital List */}
        <div className="overflow-y-auto p-6 bg-white">
          {hospitals.length > 0 ? (
            <div className="space-y-4">
              {hospitals.map((hospital, index) => (
                <div
                  key={index}
                  className="bg-gray-100 border border-gray-300 rounded-lg shadow-sm p-4"
                >
                  <h3 className="text-lg font-semibold text-pink-600">
                    {hospital.display_name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {hospital.address?.road || "Unknown Road"},{" "}
                    {hospital.address?.city || hospital.address?.town || hospital.address?.village || "Unknown City"}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 italic text-center mt-10">No hospitals to display yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default HospitalSearch;
