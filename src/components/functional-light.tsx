import { useState } from "react";

const trafficSequence: string[] = ["red", "green", "yellow"];

export const FunctionalTrafficLight = () => {
  const [trafficState, setTraffic] = useState("red");
  const increment = () => {
    const nextLight = trafficSequence.at(trafficSequence.indexOf(trafficState) + 1);
    if (nextLight === undefined) {
      setTraffic(trafficSequence[0]);
    } else {
      setTraffic(nextLight);
    }
  };

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        <div className={`circle ${trafficState === "red" ? "red" : "black"}`}></div>
        <div className={`circle ${trafficState === "yellow" ? "yellow" : "black"}`}></div>
        <div className={`circle ${trafficState === "green" ? "green" : "black"}`}></div>
      </div>
      <button
        className="next-state-button"
        onClick={() => {
          increment();
        }}
      >
        Next State
      </button>
    </div>
  );
};
