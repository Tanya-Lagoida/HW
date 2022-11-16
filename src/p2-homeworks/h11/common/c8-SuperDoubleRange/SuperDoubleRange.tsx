import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

type SuperDoubleRangePropsType = {
  value: number | number[],
  handleDoubleRange: (value: number | number[]) => void
}

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

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
  {
    value, handleDoubleRange
  }
) => {
  const handleChange = ( event: Event,     newValue:  number[] | number) => {
    handleDoubleRange(newValue);
  }

  return (
    <>
      <Box sx={{ width: 300 }}>
        <Slider
          getAriaLabel={() => 'Temperature range'}
          aria-label="Custom marks"
          value={value}
          onChange={handleChange}
          color="secondary"
          marks={marks}
          valueLabelDisplay="on"
        />
      </Box>
    </>
  );
};
export default SuperDoubleRange;
