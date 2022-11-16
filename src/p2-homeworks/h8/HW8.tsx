import React, { useState } from 'react';
import { homeWorkReducer } from './bll/homeWorkReducer';
import s from './style.module.css'

export type InitialStateType = {
  _id: number
  name: string
  age: number
}

const initialPeople = [
  { _id: 0, name: 'Кот', age: 3 },
  { _id: 1, name: 'Александр', age: 66 },
  { _id: 2, name: 'Коля', age: 16 },
  { _id: 3, name: 'Виктор', age: 44 },
  { _id: 4, name: 'Дмитрий', age: 40 },
  { _id: 5, name: 'Ирина', age: 55 }
];

function HW8() {
  const [people, setPeople] = useState<InitialStateType[]>(initialPeople);

  const finalPeople = people.map((p: InitialStateType) => (
    <div key={p._id} className={s.people}>
        <div className={s.name}>{p.name}</div>
        <div className={s.age}>{p.age}</div>
    </div>
  ));

  const sortUp = () => setPeople(homeWorkReducer(initialPeople, {
    type: 'sort',
    payload: 'up'
  }));
  const sortDown = () => setPeople(homeWorkReducer(initialPeople, {
    type: 'sort',
    payload: 'down'
  }));
  const check = () => setPeople(homeWorkReducer(initialPeople, {
    type: 'check',
    payload: 18
  }));


  return (
    <div className={s.hw8}>
      <hr/>
      homeworks 8
      {finalPeople}


      <div className={s.allbutton}>
      <button className={s.button} onClick={sortUp}>sort up</button>
      <button className={s.button} onClick={sortDown}>sort down</button>
      <button className={s.button} onClick={check}>check 18</button>
      </div>

    </div>
  );
}

export default HW8;
