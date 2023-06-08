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
          if (current.right === null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }
  contains(value) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
  BFS() {
    let node = this.root;
    let data = [];
    let queue = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    return data;
  }
  DFSPreorder() {
    let data = [];
    function traverse(node) {
      data.push(node.value);
      node.left && traverse(node.left);
      node.right && traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
  DFSPostorder() {
    let data = [];
    function traverse(node) {
      node.left && traverse(node.left);
      node.right && traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }
  DFSInorder() {
    let data = [];
    function traverse(node) {
      node.left && traverse(node.left);
      data.push(node.value);
      node.right && traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
  min() {
    let current = this.root;
    while (current.left) {
      current = current.left;
    }
    return current.value;
  }
  max() {
    let current = this.root;
    while (current.right) {
      current = current.right;
    }
    return current.value;
  }
  remove(value) {
    this.root = this.removeNode(this.root, value);
  }
  removeNode(node, value) {
    if (node == null) {
      return null;
    }
    if (value == node.value) {
      if (node.left == null && node.right == null) {
        return null;
      }
      if (node.left == null) {
        return node.right;
      }
      if (node.right == null) {
        return node.left;
      }
      let tempNode = getSmallest(node.right);
      node.value = tempNode.value;
      node.right = this.removeNode(node.right, tempNode.value);
      return node;
    } else if (value < node.value) {
      node.left = this.removeNode(node.left, value);
      return node;
    } else {
      node.right = this.removeNode(node.right, value);
      return node;
    }
  }
  isValidBST() {
    let isValid = true;
    let prevValue = null;
  
    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
  
      if (prevValue !== null && node.value <= prevValue) {
        isValid = false;
        return;
      }
      prevValue = node.value;
  
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(this.root);
    return isValid;
  }
}
const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(90);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.isValidBST());