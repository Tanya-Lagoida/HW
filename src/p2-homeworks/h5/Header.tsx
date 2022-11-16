import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';


export function Header() {


  return (
    <div>
      <input type="checkbox" id={"menu"} className={s.menu}/>
      <label htmlFor="menu" className={s.button}></label>

      <nav className={s.navigation}>
        <div className={s.item}>
          <NavLink to={'/pre_junior'}
                   activeClassName={s.navLink}>Pre-Junior</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to={'/junior'}
                   activeClassName={s.navLink}>Junior</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to={'/junior_plus'}
                   activeClassName={s.navLink}>JuniorPlus</NavLink>
        </div>
      </nav>

    </div>

  );
}


