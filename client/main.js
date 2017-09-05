import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Players} from './../imports/api/players';
import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';
import Player from './../imports/ui/Player';



const renderPlayers = (players) => {
    return players.map((player) => {
      return <Player key={player._id} />;

    });
};


Meteor.startup(() => {
  Tracker.autorun(() => {
    let players = Players.find().fetch();
    let title = 'Score Master';
    let subTitle = 'Created By Mark Stockdale';
    let jsx = (
        <div>
            <TitleBar title={title} subTitle={subTitle}/>
            {renderPlayers(players)}
            <AddPlayer/>

        </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });


});
