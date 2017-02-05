import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';

//Decided to use some JS instead of media queries for mobile/desktop styling since I don't use CSS with React much
//Passing down deviceType as a prop based on the width of the device. Not sure if 800px is standard breakpoint, but will work for now
var deviceType;

if(window.outerWidth > 800) {
  deviceType = 'desktop';
} else {
  deviceType = 'mobile';
}

ReactDOM.render(<App deviceType={deviceType} />, document.querySelector('.container'));
