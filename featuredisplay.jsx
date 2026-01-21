import React, { useEffect, useState } from "react";
import SmartNavigationImage from "../assets/Smart-navigation.jpg";
import SpeedAlertImage from "../assets/speed-alert.jpg";
import EmergencyContactsImage from "../assets/emergency-contacts.jpg";
import VehicleTrackingImage from "../assets/vehicle-tracking.jpg";

import SmartNavigation from "./SmartNavigation";
import SpeedAlert from "./SpeedAlert";
import EmergencyServices from "./EmergencyServices";
import VehicleTracking from "./VehicleTracking";

const FeatureDisplay = ({ selectedFeature }) => {
  const [activeFeature, setActiveFeature] = useState(null);

  useEffect(() => {
    setActiveFeature(null);
  }, [selectedFeature]);

  const handleOpenFeature = () => {
    setActiveFeature(selectedFeature);
  };

  const featureImages = {
    "Smart Navigation": SmartNavigationImage,
    "Speed Alert": SpeedAlertImage,
    "Emergency Services": EmergencyContactsImage,
    "Vehicle Tracking": VehicleTrackingImage,
  };

  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={featureImages[selectedFeature]}
        alt={selectedFeature}
        style={{ width: "200px", height: "auto", marginTop: "10px" }}
      />
      <button
        onClick={handleOpenFeature}
        style={{
          marginTop: "10px",
          padding: "8px 12px",
          background: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Open {selectedFeature}
      </button>

      {activeFeature === "Smart Navigation" && <SmartNavigation />}
      {activeFeature === "Speed Alert" && <SpeedAlert />}
      {activeFeature === "Emergency Services" && <EmergencyServices />}
      {activeFeature === "Vehicle Tracking" && <VehicleTracking />}
      {/* Vehicle Tracking handled in App.js */}
    </div>
  );
};

export default FeatureDisplay;
