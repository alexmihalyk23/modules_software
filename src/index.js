import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import $ from 'jquery';

$(document).ready(function(){
    $('#main_nav_ul').click(function(event){
        if (event.target.tagName.toLowerCase() === 'a') {
            let target = $(event.target.hash);
            target = target.length ? target : $('[name=' + event.target.hash+ ']');
            console.log(target.length);
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top -100
                }, 500);
                return false;
            }
        }
    });

})
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
