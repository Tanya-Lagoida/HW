import React, { useState } from 'react';
import SuperRange from './common/c7-SuperRange/SuperRange';
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange';
import style from './common/c7-SuperRange/SuperRange.module.css';
import { SuperInput } from './SuperInput';
import { SuperDoubleInput } from './SuperDoubleInput';

function HW11() {
  const [valueMin, setValueMin] = useState(20);
  const [valueMax, setValueMax] = useState(37 );

  const [value, setValue] = useState<[number, number]>([20, 37]);

  const handleRange = (value: number | number[]) => {
    setValue( (previosValue) => [value as number, previosValue[1] ]);

  };
  const handleDoubleRange = (value: number | number[]) => {
    setValue(value as [number, number]);
  };
  const handleInputMin = (value: number) => {setValueMin(value)}
  const handleInputMax = (value: number) => {setValueMax(value)}


  return (
    <div>
      <hr/>
      homeworks 11

      <div className={style.range}>
        <SuperRange
          handleRange={handleRange}
          value={value[0]}
        />
      </div>

      <div>
        <SuperDoubleRange
          handleDoubleRange={handleDoubleRange}
          value={value}
        />
      </div>

      <div className={style.input}>
        <SuperInput
          valueMin={valueMin}
          handleInputMin={handleInputMin}
        />
      </div>

      <div className={style.input}>
        <SuperDoubleInput
          valueMin={valueMin}
          valueMax={valueMax}
          handleInputMin={handleInputMin}
          handleInputMax={handleInputMax}
        />
      </div>

    </div>
  )
}

export default HW11;
