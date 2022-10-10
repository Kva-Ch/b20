import React from 'react';
import {useMeter} from 'react-aria';

function TaskMeter(props) {

  let {
    label,
    showValueLabel = !!label,
    value,
    minValue = 0,
    maxValue = 100
  } = props;
  let {meterProps, labelProps} = useMeter(props);

  // Calculate the width of the progress bar as a percentage
  let percentage = (value - minValue) / (maxValue - minValue);
  let barWidth = `${Math.round(percentage * 100)}%`;

  return (<div {...meterProps} style={{
      width: 400
    }}>
    <div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
      {
        label && (<span {...labelProps}>
          {label}
        </span>)
      }
      {
        showValueLabel && (<span>
          {meterProps['aria-valuetext']}
        </span>)
      }
    </div>
    <div style={{
        height: '30px',
        background: 'lightgray'
      }}>
      <div style={{
          width: barWidth,
          height: '30px',
          background: '#000000'
        }}/>
    </div>

  </div>);
}

export default TaskMeter;
