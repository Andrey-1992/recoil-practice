import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RecoilRoot } from 'recoil';

const recoilRoot = <RecoilRoot> <App /> </RecoilRoot>;

ReactDOM.render(recoilRoot ,document.getElementById('root'));

