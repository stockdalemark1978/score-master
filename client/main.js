import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

Meteor.startup(function (){
    let name = 'Mark';
    let jsx = <p>Hi {name}!</p>;
    ReactDOM.render(jsx, document.getElementById('app'));
});