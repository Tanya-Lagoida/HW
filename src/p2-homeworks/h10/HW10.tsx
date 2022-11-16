import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppStoreType } from './bll/store';
import style from '../h9/Clock.module.css';
import { loadingAC } from './bll/loadingReducer';

function HW10() {
  const isLoading =useSelector<AppStoreType, boolean>(state => state.loading.isLoading);
  const dispatch = useDispatch();


  const setLoading = () => {
    dispatch(loadingAC(true))
    setTimeout(() => {
      dispatch(loadingAC(false))
    }, 1500)

  };

  return (
    <div>
      <hr/>
      homeworks 10

      {isLoading
        ? (
          <div>loading...</div>
        ) : (
          <div>
            <button onClick={setLoading} className={style.button}>set loading</button>
          </div>
        )
      }

    </div>
  );
}

export default HW10;
