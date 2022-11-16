import React, {  DetailedHTMLProps, InputHTMLAttributes } from 'react';
import style from './common/c7-SuperRange/SuperRange.module.css';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperInputPropsType =
  DefaultInputPropsType & {
  valueMin: number,
  handleInputMin: (valueMin: number) => void,
}



export const SuperInput: React.FC<SuperInputPropsType> = ( {valueMin, handleInputMin, ...restProps} ) => {

  const onChangeCallback = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleInputMin(+e.currentTarget.value);
  };

  return <>
    <span>0</span>
    <input
      type={'range'}
      onChange={onChangeCallback}
      {...restProps}
      list={'tickmarks'}
      value={valueMin}
      className={style.rangeInput}
    />
    <span>100</span>


      <datalist id={"tickmarks"}>
        <option value="0" ></option>
        <option value="50" ></option>
        <option value="100" ></option>
      </datalist>


  </>;
};
