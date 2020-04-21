class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{
    constructor(value){
        this.root = new Node(value)
        this.count = 0
    }

    insert(value){
        //create new node with given value//
        let newNode = new Node(value)

        //implement a recursive search algorithm to traverse through and set the new node//
        const searchTree = node => {
            // if newNode is smaller than root, go left
            if(value < node.value){
                //if no left node is available, append there//
                if(!node.left){
                    node.left = newNode
                }//if there is a left child, look again//
                else{
                    searchTree(node.left)
                }
            }
            // if newNode is greater than root, go right
            if(value > node.value){
                //if not right node is available. append there//
                if(!node.right){
                    node.right = newNode
                }// if there is a right child, look again//
                else{
                    searchTree(node.right)
                }
            }
        }

        // call search tree method on root node//
        searchTree(this.root)
    }

    min(){
        //pointer to traverse through, starts from root
        let current = this.root
        //just keep looking on left until last leaf node//
        while(current.left){
            current = current.left
        }
        console.log(`Min value: ${current.value}`)
        return current.value
    }
}
