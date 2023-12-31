import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import "./App.css";

const App = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "api_key",
  });
  const center = useMemo(() => ({ lat: 22.5836311, lng: 88.493644 }), []);

  console.log("check");

  return (
    <div className="App">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={10}
        >
          <Marker position={{ lat: 22.5836311, lng: 88.493644 }} />
        </GoogleMap>
      )}
    </div>
  );
};

export default App;
