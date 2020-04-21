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

    max(){
        //pointer to traverse through, starts from root
        let current = this.root
        //just keep looking on right until last leaf node//
        while(current.right){
            current = current.right
        }
        console.log(`Min value: ${current.value}`)
        return current.value
    }

    contains(value){
        //pointer to traverse through and keep track 
        let currentNode  = this.root
        
        while(currentNode){
            if(currentNode.value === value){
                console.log('Match found!!!')
                return true
            }
            if(currentNode.value > value){
                currentNode = currentNode.left
            }
            else{
                currentNode = currentNode.right
            }
        }

        console.log('No Match Found!!!')
        return false
    }

    // Depth First Search //

    //in-order -> left, root, right//
    dfsInOrder(){
        let result = []

        const traverse = node => {
            //if left node exists, go left again//
            if(node.left) traverse(node.left)
            //capture root node value//
            result.push(node.value)
            //if right node exists, go right again//
            if(node.right) traverse(node.right)
        }
    }

    //pre-order -> root, left, right//
    dfsPreOrder(){
        let result = []

        const traverse = node => {
            //capture root node value//
            result.push(node.value)
            //if left node exists, go left again//
            if(node.left) traverse(node.left)
            //if right node exists, go right again//
            if(node.right) traverse(node.right)
        }
    }

    //post-order -> left, right, root//
    dfsPreOrder(){
        let result = []

        const traverse = node => {
            //if left node exists, go left again//
            if(node.left) traverse(node.left)
            //if right node exists, go right again//
            if(node.right) traverse(node.right)
            //capture root node value//
            result.push(node.value)
        }
    }

}
