class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if ((current.right = null)) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }
  contains(value) {
    let current = this.root;
    let found = false;
    if (this.root === null) return false;
    while (current && !found) {
      if (value === value) return true;
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return (found = true);
      }
    }
    return false;
  }
}
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(100);
bst.insert(55);
console.log(bst.contains(10));
