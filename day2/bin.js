class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const newNode = new Node(value);
  
      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    insertNode(node, newNode) {
      if (newNode.value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
  
    search(value) {
      return this.searchNode(this.root, value);
    }
  
    searchNode(node, value) {
      if (node === null) {
        return false;
      }
  
      if (value === node.value) {
        return true;
      }
  
      if (value < node.value) {
        return this.searchNode(node.left, value);
      } else {
        return this.searchNode(node.right, value);
      }
    }

    display(node)
    {
      if(node === null){
        return;
      }
        
      
       
        
        this.display(node.left);
        console.log(node.value);

        // console.log(node.value);
        this.display(node.right);
      
    }
  }


  
  const binaryTree = new BinaryTree();
  binaryTree.insert(5);
  binaryTree.insert(3);
  binaryTree.insert(8);
  binaryTree.insert(2);
  binaryTree.insert(4);
  
  console.log(binaryTree.search(4)); 
  console.log(binaryTree.search(7)); 
  console.log(binaryTree.display(binaryTree.root))