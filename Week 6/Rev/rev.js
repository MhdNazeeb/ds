class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class BST{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root===null
    }
    insert(value){
        let newNode=new Node(value)
        if(this.isEmpty()){
            this.root=newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(root,newNode){
        if(newNode.value<value){
            if(root.left===null){
                root.left=newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right===null){
                root.right=newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }
    min(root){
        if(root){
            if(root.left){
                root.left=this.min
            }else{
                this.min(root.left)
            }
        }
        
    }
    isValidity(){
        
    }
    preorder(root){
        console.log(root.value);
        this.preorder(root.left)
        this.preorder(root.right)
    }

}
const bst=new BST()
bst.insert(10)
bst.insert(100)
bst.insert(1)
bst.preorder(bst.root)
