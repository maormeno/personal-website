import React from 'react';
import logo from './logo.svg';
import Counter from './Counter';
import {NewFlow} from './utils/flow/flows';
import {tabAnimatedIcon} from './utils/flowicon/tabAnimation'
import { AppContainer } from './App.styled';


function App() {

  tabAnimatedIcon();

  return (
    <AppContainer>
      <div style={{flex:'1 1 0', alignContent:"center", justifyContent:"center"}}>
        <Counter />
      </div>
      <div style={{flex:'1 1 0'}}>
        <NewFlow/>
      </div>
      <div style={{flex:'1 1 0', alignContent:"center", justifyContent:"center"}}>
          <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=Duran" >
          Don't Click
          </a>
      </div>
    </AppContainer>
  );
}

export default App;
