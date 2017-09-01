import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() => {
  class Person {
    constructor(name) {
      this.name = name;
    }
  }

  let me = new Person('Mark');
  console.log(me);
});
