import React from 'react';
import ReactDOM from 'react-dom';
import Splash from './components/pages/Splash.jsx';


document.addEventListener('DOMContentLoaded', () => {
    return (
      ReactDOM.render(
          <Splash/>,
        document.getElementById('splash')
      )
    )
})