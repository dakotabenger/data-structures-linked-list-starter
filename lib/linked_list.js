// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

// TODO: Implement a Singly Linked List class here
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // TODO: Implement the addToTail method here
  addToTail(val) {
    let newNode = new Node(val);
    if (this.head === null && this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // TODO: Implement the removeTail method here
  removeTail() {
    let removedNode;
    let currentNode = this.head;
    let updatedTail = currentNode;
    if (this.length === 0) {
      return undefined;
    } else if (this.length === 1) {
      removedNode = this.tail;
      this.head = null;
      this.tail = null;
    } else {
      while (currentNode.next) {
        updatedTail = currentNode;
        if (currentNode.next === this.tail) {
          removedNode = this.tail;
          this.tail = updatedTail;
          this.tail.next = null;
          break;
        }
        currentNode = currentNode.next;
      }
    }
    this.length--;
    return removedNode;
  }

  // TODO: Implement the addToHead method here
  addToHead(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // TODO: Implement the removeHead method here
  removeHead() {
    let removedNode = this.head;
    if (this.length === 0) {
      return undefined;
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.length--;
    return removedNode;
  }

  // TODO: Implement the contains method here
  contains(target) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  // TODO: Implement the get method here
  get(index) {
    if (index < 0 || index > this.length) return null
    let counter = 0
    let currentNode = this.head
    while (counter !== index) {
      currentNode = currentNode.next
      counter++
    }
    return currentNode
  }

  // TODO: Implement the set method here
  set(index, val) {
    let node = this.get(index)
    if (node) {
      node.value = val
      return true
    }
    return false
  }

  // TODO: Implement the insert method here
  insert(index, val) {
    
    if (index < 0 || index >= this.length) return false
    if (index === this.length) return this.addToTail(val)
    if (index === 0) return this.addToHead(val)
    
    let newNode = new Node(val)
    let lastNode = this.get(index - 1)
    let temp = lastNode.next
    lastNode.next = newNode
    newNode.next = temp

    this.length++
    return true

  }

  // TODO: Implement the remove method here
  remove(index) {
    if (index < 0 || index >= this.length) return undefined
    if (index === 0) return this.removeHead()
    if (index === this.length) return this.removeTail()

    let lastNode = this.get(index - 1)
    let removedNode = lastNode.next 
    lastNode.next = removedNode.next
    this.length--

    return removedNode
    }

  // TODO: Implement the size method here
  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
