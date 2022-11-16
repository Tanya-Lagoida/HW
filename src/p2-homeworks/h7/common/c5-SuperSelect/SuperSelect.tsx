import React, { SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent } from 'react';
import s from '../style.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
  options: any[]
  onChangeOption: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
  {
    options,
    onChange, onChangeOption,
    ...restProps
  }
) => {
  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    onChangeOption(e.currentTarget.value);
  };

  const mappedOptions: any[] = options.map((o, key) => (
    <option className={s.option} key={key} value={o}>{o}</option>
  ))

  return (
    <div>
    <select className={s.select} onChange={onChangeCallback} {...restProps}>
      {mappedOptions}
    </select>
    </div>
  );
};

export default SuperSelect;
