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

const renderPlayers = function (players){

    // let numbers = [{val: }, {val: 2}, {val: 3}];
    //
    // return numbers.map(function(number){
    //   return <p key={number.val}>{number.val}</p>;
    // });

    return players.map(function(player){
      return (
        <div key={player._id}>
          <p >{player.name} has {player.score} point(s)</p>
        </div>);
    });
};


Meteor.startup(function (){
    let title = 'Score Master';
    let name = 'Mark';
    let jsx = (
        <div>
            <h1>{title}</h1>
            <p>Hi {name}!</p>
            <p>This is my second p.</p>
            {renderPlayers(players)}
        </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
});
