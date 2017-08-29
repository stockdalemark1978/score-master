import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(function (){
  // Players.insert({
  //   name: 'Lindsey',
  //   score: 20
  // });
  // console.log(Players.find().fetch());

  // let square = function (x) {
  //   return x * x;
  // };

  // let square = (x) => x * x;

  // console.log (square(10));

  let numbers = [9, 99, 4, 56];

  let newNumbers = numbers.map((number) => number + 1);

console.log(newNumbers);

});
