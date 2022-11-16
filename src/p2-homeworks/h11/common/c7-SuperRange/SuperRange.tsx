import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

type SuperRangePropsType =  {
  value: number | number[],
  handleRange: (value: number | number[]) => void,
};

const marks = [
  {
    value: 0,
    label: '0'
  },
  {
    value: 100,
    label: '100'
  }
];

const SuperRange: React.FC<SuperRangePropsType> = (
  { value, handleRange}
  ) =>
{
  const handleChange = (   event: Event, newValue: number | number[]) => {
    handleRange(newValue);
  }
  return (
    <>
      <Box width={300}>
        <Slider
          getAriaLabel={() => 'Temperature range'}
          valueLabelDisplay="on"
          color="secondary"
          aria-label="Volume"
          marks={marks}
          value={value}
          onChange={handleChange}
        />
      </Box>
    </>
  );
  };

export default SuperRange;
