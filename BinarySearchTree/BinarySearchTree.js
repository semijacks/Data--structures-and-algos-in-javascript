class Node {
  constructor(val, left, right) {
    this.val = val
    this.left = left
    this.right = right
  }

  show() {
    return this.val
  }
}

class BST {
  constructor() {
    this.root = null
  }

  insert(val) {
    var newNode = new Node(val, null, null)
    if (this.root == null) {
      this.root = newNode
    } else {
      let current = this.root
      let parent
      while (true) {
        parent = current
        if (val < current.val) {
          current = current.left
          if (current == null) {
            parent.left = newNode
            break
          }
        } else {
          current = current.right
          if (current === null) {
            parent.right = newNode
            break
          }
        }
      }
    }
    return this.root
  }

  inOrderTraversal(root) {
    if (!(root == null)) {
      this.inOrderTraversal(root.left)
      console.log(root.val)
      this.inOrderTraversal(root.right)
    }
  }
}

let myBST = new BST()
myBST.insert(5)
myBST.insert(4)
myBST.insert(15)
myBST.inOrderTraversal(myBST.root)
