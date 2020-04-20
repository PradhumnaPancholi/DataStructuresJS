class Node{
    constructor(value){
        this.value = value
        this.previous = null
        this.next = null
    }
}

class DoublyLinkedList{
    //starts as empty || null
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    add(data){
        //create a node with given data//
        let newNode = new Node(data)

        //check if list is empty.
        if(this.head === null){
            // add new node as head//
            this.head = newNode
            // respond with msg //
            console.log(`Added ${data} into the list`)
        }
        //if node is not empty, add at tail
        else{
            // link the current tail and new tail
            this.tail.next = newNode 
            newNode.previous = this.tail 
            console.log(`Added ${data} into the list`)
        }
        //reassign 'tail' to be the new node//
        this.tail = newNode //if there is only one item in the list, both 'head' & 'tail' will show same 'node'
        this.length++
    }

    getList(){
        console.log(this)
    }
}

myDoublyList = new DoublyLinkedList()
myDoublyList.add('red')
myDoublyList.add('indigo')
myDoublyList.add('cyan')
myDoublyList.getList()