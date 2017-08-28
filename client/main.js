import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

const players = [{
  _id: '1',
  name: 'Mark',
  score: -15
}, {
  _id: '2',
  name: 'Lindsey',
  score: 80
}, {
  _id: '3',
  name: 'Cashie',
  score: 150
}];

Meteor.startup(function (){
    let title = 'Score Master';
    let name = 'Mark';
    let jsx = (
        <div>
            <h1>{title}</h1>
            <p>Hi {name}!</p>
            <p>This is my second p.</p>
            {[<p>1</p>, <p>2</p>]}
        </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
});
