import Counter from './Counter';
import {NewFlow} from './utils/flow/flows';
import React from 'react';
import {tabAnimatedIcon} from './utils/flowicon/tabAnimation'
import './App.module.scss';
import BaseLayout from "./components/BaseLayout";
import {BrowserRouter} from "react-router-dom";

function App() {
  tabAnimatedIcon()

   return (
      <div>
         <BrowserRouter>
            <BaseLayout/>
         </BrowserRouter>
      </div>
   );
}

export default App;
