import React from 'react';
import s from './Error.module.css';

export function Error404() {
  return (
    <div className={s.error}>
      <div className={s.number}>404</div>
      <div className={s.message}>Page not found!</div>
    </div>
  );
}


