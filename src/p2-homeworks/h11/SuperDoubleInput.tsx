import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import style from './common/c7-SuperRange/SuperRange.module.css';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperDoubleInputPropsType =
  DefaultInputPropsType & {
  valueMin: number,
  valueMax: number,
  handleInputMin: (valueMin: number) => void,
  handleInputMax: (valueMax: number) => void,
}

export const SuperDoubleInput: React.FC<SuperDoubleInputPropsType> = ({valueMin, valueMax,handleInputMax, handleInputMin,   ...restProps}) => {

  const onChangeMinCallback = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleInputMin(+e.currentTarget.value);
  };
  const onChangeMaxCallback = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleInputMax(+e.currentTarget.value);
  };


  return <>
    <span>0</span>
    <input
      type={'range'}
      onChange={onChangeMinCallback}
      {...restProps}
      value={valueMin}
      list={'tickmarks'}
      className={style.rangeInput}
    />
    <span>100</span>
    <span className={style.double}>0</span>
    <input
      type={'range'}
      onChange={onChangeMaxCallback}
      {...restProps}
      value={valueMax}
      list={'tickmarks'}
      className={style.rangeInput}
    />
    <span>100</span>
    <datalist id={"tickmarks"}>
      <option value="0" ></option>
      <option value="50" ></option>
      <option value="100" ></option>
    </datalist>

    </>

};