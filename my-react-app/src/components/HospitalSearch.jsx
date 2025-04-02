import { useState } from "react";

function HospitalSearch() {
    const [hospitals, setHospitals] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

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

                // Nominatim API to search for hospitals
                const url = `https://nominatim.openstreetmap.org/search?format=json&q=hospital&limit=10&bounded=1&viewbox=${longitude-0.1},${latitude+0.1},${longitude+0.1},${latitude-0.1}`;

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

    return (
        <div className="p-6">
            <button 
                onClick={findNearestHospitals} 
                className="bg-pink-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-pink-600 transition"
            >
                Find Nearest Hospitals
            </button>

            {loading && <p className="mt-4 text-black">Searching for hospitals...</p>}
            {error && <p className="mt-4 text-red-500">{error}</p>}

            <ul className="mt-6 space-y-4">
                {hospitals.map((hospital, index) => (
                    <li key={index} className="p-4 bg-white shadow-md rounded-lg">
                        <h3 className="text-lg font-bold">{hospital.display_name}</h3>
                        <p className="text-gray-600">
                            {hospital.address && hospital.address.road}, {hospital.address && hospital.address.city}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HospitalSearch;
