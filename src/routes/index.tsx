import React from 'react';
import {Switch , Route  } from 'react-router-dom';

import InitialPage from '../pages/InitialPage';

const Routes :React.FC = () =>(
   <Switch>
        <Route path="/" exact component={InitialPage}/>
    </Switch>
    
);


export default Routes;
   