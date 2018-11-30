// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require("./stack");

class Queue {
  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }

  add(record) {
    this.s1.push(record);
  }

  remove() {
    while (this.s1.peek()) {
      //remove el from 1st stack and move to second stack
      this.s2.push(this.s1.pop()); //pop the top el
    }

    const top = this.s2.pop(); //keep record of top, so you can return back to original state to get us ready for the next remove

    while (this.s2.peek()) {
      //put element you didnt remove back in 1st stack
      this.s1.push(this.s2.pop());
    }

    return top;
  }

  peek() {
    while (this.s1.peek()) {
      //remove el from 1st stack and move to second stack
      this.s2.push(this.s1.pop()); //pop the top el
    }

    const top = this.s2.peek(); //keep record of top, so you can return back to original state to get us ready for the next remove

    while (this.s2.peek()) {
      //put element you didnt remove back in 1st stack
      this.s1.push(this.s2.pop());
    }
    return top;
  }
}

module.exports = Queue;
