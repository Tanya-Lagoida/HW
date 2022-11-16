import React from 'react';
import s from './HW12.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppStoreType } from '../h10/bll/store';
import { changeThemeAC, ThemeType } from './bll/themeReducer';
import SuperSelect from '../h7/common/c5-SuperSelect/SuperSelect';

const themes = ['dark', 'red', 'some'];

function HW12() {
  const theme = useSelector<AppStoreType, ThemeType>(state => state.theme.theme);
  const dispatch = useDispatch();

  const onChangeCallback = (theme: ThemeType) => {
    dispatch(changeThemeAC(theme));
  };

  return (
    <div className={s[theme]}>
      <hr/>
      <span>
                homeworks 12
            </span>

        <SuperSelect options={themes}
                     onChangeOption={onChangeCallback}
                     className={theme}
                     value={theme}/>



      <hr/>
    </div>
  );
}

export default HW12;
