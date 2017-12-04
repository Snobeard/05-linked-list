// linked list
'use strict';

class LinkedList{

  constructor(value) {
    this.value = value;
    this.next = null;
  };

  append(node) {
    if (!(node instanceof LinkedList))
      throw new TypeError('<node> should be an instance of LinkedList');
    
    // mattL - we know this is the last element if there is no next (null)
    if (!this.next) 
      this.next = node;
    else
      this.next.append(node);
    
    return this;
  };

  remove(node) {
    if (!(node instanceof LinkedList))
      throw new TypeError('<node> should be an instance of LinkedList');

    if (!this.next)
      return this;

    if (this.next === node) 
      this.next = this.next.next;
    else {
      this.next.remove(node);
    }

    return this;
  };

};

module.exports = LinkedList;

// TODO: implement find(value)