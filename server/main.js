import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() => {
  class Person {
    constructor(name = 'Anonymous', age = 0) {
      this.name = name;
      this.age = age;
    }
    getGreeting() {
      return `Hello! My name is ${this.name}.`;
    }
    getPersonDescription() {
      return `${this.name} is ${this.age} year(s) old!`;
    }
  }

  let me = new Person('Mark');

  let somebodyElse = new Person('Lindsey', 35);
  console.log(me.getGreeting());
  console.log(me.getPersonDescription());
  console.log(somebodyElse.getPersonDescription());
});
