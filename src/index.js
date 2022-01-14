import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App }  from './components/App/App';
import { RecoilRoot } from 'recoil';

const recoilRoot = <RecoilRoot><App /></RecoilRoot>;

ReactDOM.render(recoilRoot ,document.getElementById('root'));

