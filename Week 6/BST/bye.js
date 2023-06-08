class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BST {
    constructor() {
        this.root = null;
    }
    isEmpty() {
        return this.root === null;
    }
    insert(value) {
        let newNode = new Node(value);
        if (this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }
    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }
    search(root, value) {
        if (!root) {
            return false;
        } else {
            if (root.value === value) {
                return true;
            } else if (value < root.value) {
                return this.search(root.left, value);
            } else {
                return this.search(root.right, value);
            }
        }
    }
    levelOrder() {
        const queue = [];
        queue.push(this.root);
        while (queue.length) {
            let curr = queue.shift();
            console.log(curr.value);
            if (curr.left) {
                queue.push(curr.left);
            }
            if (curr.right) {
                queue.push(curr.right);
            }
        }
    }
    preorder(root) {
        if (root) {
            console.log(root.value);
            this.preorder(root.left);
            this.preorder(root.right);
        }
    }
    inorder(root) {
        if (root) {
            this.inorder(root.left);
            console.log(root.value);
            this.inorder(root.right);
        }
    }
    postorder(root) {
        if (root) {
            this.postorder(root.left);
            this.postorder(root.right);
            this.postorder(root.value);
        }
    }
    min(root) {
        if (!root.left) {
            return root.value;
        } else {
            return this.min(root.left);
        }
    }
    max(root) {
        if (!root.right) {
            return root.value;
        } else {
            return this.max(root.right);
        }
    }
   isValidBST(){
    return this.checkBst(this.root,-Infinity,Infinity)
   }
   checkBst(node,min,max){
    if(!node){
        return true
    }
    if(node.value<=min || node.value>=max){
        return false
    }
    return (
        this.checkBst(node.left,min,node.value) && this.checkBst(node.right,node.value,this.max)
    )
   }
}
const bt = new BST();
bt.insert(20);
bt.insert(30);
bt.insert(4);
bt.insert(100);
bt.insert(2);
// bt.preorder(bt.root)
// bt.inorder(bt.root)
// console.log(bt.min(bt.root));
console.log(bt.isValidBST());
// bt.levelOrder()
