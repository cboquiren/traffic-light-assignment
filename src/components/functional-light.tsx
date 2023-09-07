import {useState} from 'react';

const trafficSequence: string[] = [
  'red',
  'green',
  'yellow',
]

export const FunctionalTrafficLight = () => {
  const [trafficState, setTraffic] = useState('red');
  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        <div className={`circle ${trafficState === 'red' ? 'red' : 'black'}`}></div>
        <div className={`circle ${trafficState === 'yellow' ? 'yellow' : 'black'}`}></div>
        <div className={`circle ${trafficState === 'green' ? 'green' : 'black'}`}></div>
      </div>
      <button className="next-state-button" onClick={() => {
        const index = trafficSequence.indexOf(trafficState);
        if (index === trafficSequence.length - 1) {
          setTraffic('red');
        } else {
          setTraffic(trafficSequence.at(index + 1));
        }
      }} >Next State</button>
    </div>
  )
}