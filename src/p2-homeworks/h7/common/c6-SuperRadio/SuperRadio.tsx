import React, { ChangeEvent, InputHTMLAttributes, DetailedHTMLProps } from 'react';
import s from '../style.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
  options?: any[]
  onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
  {
    type, name,
    options, value,
    onChange, onChangeOption,
    ...restProps
  }
) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeOption && onChangeOption(e.currentTarget.value);
  };


  const mappedOptions: any[] = options ? options.map((o, key) => (

    <label key={key} className={s.label}>
      <input
        className={s.radio}
        type={'radio'}
        onChange={onChangeCallback}
        value={o}
        name={name}
        checked={o === value}
      />
      {o}
    </label>
  )) : []

  return (
    <>
      {mappedOptions}
    </>
  );
};

export default SuperRadio;
