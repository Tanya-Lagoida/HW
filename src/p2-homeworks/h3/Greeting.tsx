import React, { ChangeEvent } from 'react';
import s from './Greeting.module.css';

type GreetingPropsType = {
  name: string
  setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
  addUser: () => void
  error: string | null
  totalUsers: number
}


const Greeting: React.FC<GreetingPropsType> = (
  { name, setNameCallback, addUser, error, totalUsers }
) => {
  const inputClass = error ? s.error : s.input;

  return (
    <div className={s.all}>
      <div className={s.errorAndInput}>
      <input value={name} onChange={setNameCallback} className={inputClass}/>
      <div className={s.errorText}>{error}</div>
      </div>
      <div>
      <button onClick={addUser} className={s.button}>add</button>
      <span className={s.totalUsers}>{totalUsers}</span>
      </div>
    </div>
  );
};

export default Greeting;
