import React from 'react';
import {MainPage} from '../pages';
import { Route, Switch } from 'react-router-dom';


const App = () => {
    return (
        <div className="app">
   
            <Switch>
                <Route path='/' exact component={MainPage}/>
                <Route  exact component={MainPage}/>
            </Switch>
        </div>
    )
}
export default App;