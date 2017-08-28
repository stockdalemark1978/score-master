import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(function (){
  // Players.insert({
  //   name: 'Lindsey',
  //   score: 20
  // });
  console.log(Players.find().fetch());
});
