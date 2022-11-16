import React from 'react';
import s from './App.module.css';
import HW5 from '../../../p2-homeworks/h5/HW5';
import { useSelector } from 'react-redux';
import { AppStoreType } from '../../../p2-homeworks/h10/bll/store';
import { ThemeType } from '../../../p2-homeworks/h12/bll/themeReducer';

function App() {
  const theme = useSelector<AppStoreType, ThemeType>(state => state.theme.theme);


  return (
    <div className={`${s[theme]} ${s[theme + '-text']}`}>
      <div className={s.react}>react homeworks:</div>
      <HW5/>

    </div>
  );
}

export default App;
