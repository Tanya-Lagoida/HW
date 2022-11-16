import React from 'react';
import { AffairType } from "./HW2";
import s from './Affairs.module.css';

export type AffairPropsType = {
  affair: AffairType
  deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
  const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}

  const priority = s[props.affair.priority]

  return (
    <div className={s.affair}>
      <div className={s.name}>{props.affair.name}</div>
      <div className={priority}>{props.affair.priority}</div>
      <div>
        <button onClick={deleteCallback} className={s.button}>X</button>
      </div>
    </div>
  );
}

export default Affair;
