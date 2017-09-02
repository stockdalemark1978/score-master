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

  class Employee extends Person {
    constructor(name, age, title) {
      super(name, age);
      this.title = title;
    }
    hasJob() {
      return !!this.title;
    }
    getGreeting() {
      if (this.title) {
        return `Hi, My name is ${this.name} and I work as ${this.title}.`;
      } else {
        return super.getGreeting();
      }
    }
  }

  let me = new Employee('Mark', 38, 'db admin');
  console.log(me.getPersonDescription());
  console.log(me.getGreeting());

  let somebodyElse = new Employee('Lindsey', 35);

  console.log(somebodyElse.getPersonDescription());
  console.log(somebodyElse.getGreeting());
});
