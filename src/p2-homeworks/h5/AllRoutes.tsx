import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Error404 } from './pages/Error404';
import { PreJunior } from './pages/PreJunior';
import { Junior } from './pages/Junior';
import { JuniorPlus } from './pages/JuniorPlus';


export function AllRoutes() {
  return (
    <div>
      <Switch>

        <Route path={'/'} exact render={() => <Redirect to='/pre_junior'/>} />
        <Route path={'/pre_junior'} render={() => <PreJunior/>}/>
        <Route path={'/junior'} render={() => <Junior/>}/>
        <Route path={'/junior_plus'} render={() => <JuniorPlus/>}/>
        <Route path={'*'} render={() => <Error404/>}/>

      </Switch>
    </div>


  );
}

