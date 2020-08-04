import React from 'react';
import './App.css';
import { Switch, Route, Router} from 'react-router-dom'
import MainCard from './components/MainCard'
import CreateProject from './components/create_projects'
import { newHistory } from './utils/history'

function App() {
  return (
    <div className="App">
        <Router history={newHistory}>
            <div>
                <Switch>
                    <Route exact path='/' render={() => <MainCard />} />

                    <Route path='/creating_project' render={() => <CreateProject />}  />
                </Switch>

            </div>
        </Router>
     
    </div>
  );
}

export default App;
