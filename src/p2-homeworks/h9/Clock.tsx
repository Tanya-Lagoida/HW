import React, { useState } from 'react';
import style from './Clock.module.css';

function Clock() {
  const [timerId, setTimerId] = useState<number>(0);
  const [date, setDate] = useState<Date>();
  const [show, setShow] = useState<boolean>(false);

  const stop = () => {
    clearInterval(timerId)
  };
  const start = () => {
    stop();
    const id: number = window.setInterval(() => {
      setDate(new Date())
    }, 1000);
    setTimerId(id);
  };

  const onMouseEnter = () => {
    setShow(true)
  };
  const onMouseLeave = () => {
    setShow(false)
  };

  const stringTime = date?.toLocaleTimeString()
  const stringDate = date?.toLocaleDateString()

  return (
    <div>
      <div  className={style.all}>
        <div className={style.time}
             onMouseEnter={onMouseEnter}
             onMouseLeave={onMouseLeave}
        >
          {stringTime}
        </div>

        {show && (
          <div className={style.date}>
            {stringDate}
          </div>
        )}
      </div>

      <button className={style.button} onClick={start}>start</button>
      <button className={style.button} onClick={stop}>stop</button>

    </div>
  );
}

export default Clock;
