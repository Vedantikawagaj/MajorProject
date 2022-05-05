import React from 'react';
import CountdownTimer from './CountdownTimer';

import '../ComponentCSS/Timer.css';

export default function Timer(props) {
  const time = props.timer
  const current_time = new Date().getTime();

  const future_time = current_time + time;

  return (
    <div>
      
      <CountdownTimer targetDate={future_time} />
    </div>
  );
}
