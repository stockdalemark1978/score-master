import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() => {




  // class Person {
  //   constructor(name = 'Anonymous', age = 0) {
  //     this.name = name;
  //     this.age = age;
  //   }
  //   getGreeting() {
  //     return `Hello! My name is ${this.name}.`;
  //   }
  //   getPersonDescription() {
  //     return `${this.name} is ${this.age} year(s) old!`;
  //   }
  // }
  //
  // class Employee extends Person {
  //   constructor(name, age, title) {
  //     super(name, age);
  //     this.title = title;
  //   }
  //   hasJob() {
  //     return !!this.title;
  //   }
  //   getGreeting() {
  //     if (this.title) {
  //       return `Hi, My name is ${this.name} and I work as ${this.title}.`;
  //     } else {
  //       return super.getGreeting();
  //     }
  //   }
  // }
  //
  // class Programmer extends Person {
  //   constructor(name, age, language = 'assembly') {
  //     super(name, age);
  //     this.language = language;
  //   }
  //   getGreeting() {
  //
  //       return `Hello, my name is ${this.name} and I am a ${this.language} developer. `
  //
  //   }
  // }
  //
  // let me = new Programmer('Mark', 38);
  //
  // console.log(me.getGreeting());
  //
  //
  // let someGuy = new Programmer ('Larry', 49, 'Javascript');
  // console.log(someGuy.getGreeting());
});
