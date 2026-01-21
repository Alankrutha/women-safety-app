import React, { useState } from "react";
import FeatureDisplay from "./FeatureDisplay";
import smartNavigationImg from "../assets/Smart-navigation.jpg";
import speedAlertImg from "../assets/speed-alert.jpg";
import emergencyServicesImg from "../assets/emergency-contacts.jpg";
import vehicleTrackingImg from "../assets/vehicle-tracking.jpg";


const features = [
  {
    name: "Smart Navigation",
    description: "Provides the shortest and safest route using real-time data.",
    image: "C:/Users/kolag/vehicle-tracker/src/assets/Smart-navigation.jpg", // Replace with actual image
  },
  {
    name: "Speed Alert",
    description: "Notifies you when exceeding the speed limit and sends alerts.",
    image: "C:/Users/kolag/vehicle-tracker/src/assets/speed alert.jpg",
  },
  {
    name: "Emergency Services",
    description: "Quick access to emergency contacts and assistance.",
    image: "C:/Users/kolag/vehicle-tracker/src/assets/emergency contacts.jpg",
  },
  {
    name: "Vehicle Tracking",
    description: "Live tracking and location history of your vehicle.",
    image: "C:/Users/kolag/vehicle-tracker/src/assets/vehicle-tracking.jpg",
  },
];

const FeatureSection = () => {
  const [activeFeature, setActiveFeature] = useState("Smart Navigation");
  const [doubleClickFeature, setDoubleClickFeature] = useState(null);

  return (
    <div className="feature-section">
      {/* Section Header */}
      <h2 className="section-title"> Features</h2>
      
      {/* Feature Tabs */}
      <div className="feature-tabs">
        {features.map((feature) => (
          <button
            key={feature.name}
            className={activeFeature === feature.name ? "active" : ""}
            onClick={() => setActiveFeature(feature.name)}
            onDoubleClick={() => setDoubleClickFeature(feature.name)}
          >
            {feature.name}
          </button>
        ))}
      </div>

      {/* Feature Details */}
      <div className="feature-details">
        {features
          .filter((feature) => feature.name === activeFeature)
          .map((feature) => (
            <div key={feature.name} className="feature-card">
              <img src={feature.image} alt={feature.name} />
              <h3>{feature.name}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
      </div>
    
    {/* Feature Display */}
    <div className="feature-details">
        {activeFeature && <FeatureDisplay selectedFeature={activeFeature} />}
      </div>
    </div>
  );
};
  
export default FeatureSection;
