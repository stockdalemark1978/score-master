import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() => {
  class Person {
    constructor(name = 'Anonymous') {
      this.name = name;
    }
    getGreeting() {
      return `Hello! My name is ${this.name}.`;
    }
  }

  let me = new Person('Mark');
  console.log(me.getGreeting());
});
