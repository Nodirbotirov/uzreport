import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './components/Card';
import reportWebVitals from './reportWebVitals';
import Card from "reactstrap/lib/Card";

import Wrap from "./components/Wrap";

import Gang from "./components/Gang";

import LessonUttizTurt from "./components/LessonUttizTurt";

// import LessonOttizikki from "./components/LessonOttizikki";
import LifeCycleMethods from "./components/LifeCycleMethods";
import Bigbang from "./components/Bigbang";
import Hoocks from "./components/Hoocks";
import Routing from "./components/Routing";

import Projektone from "./practics/Projektone";
ReactDOM.render(
  <React.StrictMode>
    {/*<App />*/}
    {/*<Wrap/>*/}
    {/*<Gang/>*/}
    {/*<LessonOttizikki/>*/}
    {/*<LifeCycleMethods/>*/}
    {/*<Bigbang/>*/}
    {/*<LessonUttizTurt/>*/}
    {/*<Hoocks/>*/}
    {/*<Routing/>*/}
    <Projektone/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
