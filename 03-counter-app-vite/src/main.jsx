import React from 'react'
import ReactDOM from 'react-dom';
import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelloWorldApp />
        <FirstApp title="Probando"  subTitle="cosas"  />

        <CounterApp value={12}/>
    </React.StrictMode>
);