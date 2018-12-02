"use strict";

const Queue = require("./index");

class PriorityQueue {
  constructor() {
    this.highPriority = new Queue();
    this.lowPriority = new Queue();
  }

  add(record, isHighPriority = false) {
    isHighPriority
      ? this.highPriority.add(record)
      : this.lowPriority.add(record); //if it is highprio put in highpro array, else ..
  }

  remove() {
    //remove from highprio first
    if (!this.highPriority.isEmpty()) {
      return this.highPriority.remove();
    }

    return this.lowPriority.remove();
  }

  peek() {
    if (!this.highPriority.isEmpty()) {
      //peek from highprio first
      return this.highPriority.peek();
    }

    return this.lowPriority.peek();
  }

  length() {
    return this.lowPriority.getLength() + this.highPriority.getLength();
  }
}

const q = new PriorityQueue();
q.add("Hello");
q.add("bye b");
q.add("actually i forgot something", true); //goes to top of que since its highprio

console.log(q.peek());

q.remove();

console.log(q.peek());

module.exports = PriorityQueue;
