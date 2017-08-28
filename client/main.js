import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

Meteor.startup(function (){
    let title = 'Score Master';
    let name = 'Mark';
    let jsx = (
        <div>
            <h1>{title}</h1>
            <p>Hi {name}!</p>
            <p>This is my second p.</p>
        </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
});
