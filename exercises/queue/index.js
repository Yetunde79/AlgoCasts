// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

//queue follows fifo
//array is a bigger version of queue
//unshift() adds to front of array
//pop() removes from array

"use strict";

class Queue {
  //ES6 class
  constructor() {
    //this is where you initialize things in classes
    //this is what is first called when we call the object of this class
    this.data = [];
  }

  add(record) {
    //no need for function, its a method
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop(); //return so you can work with what you just removed
  }

  peek() {
    return this.data[this.data.length - 1];
  }

  getLength() {
    return this.data.length;
  }

  isEmpty() {
    return this.data.length === 0;
  }
}

module.exports = Queue;
