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
            this.tail.next = newNode //sets value of newNode in 'next'//
            newNode.previous = this.tail //sets value of newNode.previous && head.next//
            console.log(`Added ${data} into the list`)
        }
        //reassign 'tail' to be the new node//
        this.tail = newNode //if there is only one item in the list, both 'head' & 'tail' will show same 'node'
        this.length++
    }

    get(index){
        //verify if index in non-negative//
        if(index > -1){
            //pointer to go through list//
            let current = this.head
            //to keep track of index/interations//
            let i = 0

            //iterate through loop until end or undefined//
            while((current !== null) && (i < index)){
                current = current.next
                i++
            }
            return current !== null ? console.log(`Value of index ${index}: ${current.value}`) : console.log(`The index ${index} is out of range`)
        }
        else{
            console.log(`The index ${index} is out of range`)
        }
    }

    remove(index){
        //if list is empty or index is non positive//
        if(this.head === null && index < 0){
            throw new RangeError(`This ${index} doesn't fall under available range`)
        }
        //if index is 0 -> removing first node//
        if(index === 0){
            //store data from current head//
            let temp = this.head.value
            //replace the value of 'head' with next(null) //
            this.head = this.head.next

            //if there is only one item, reset 'tail'
            if(this.head === null){
                this.tail === null
            }
            else{
                this.head.previous === null
            }
        console.log(`Succesfully deleted ${temp} at index ${index}`)
        }
    }

    getList(){
        console.log(this)
    }
}

myDoublyList = new DoublyLinkedList()
myDoublyList.add('red')
myDoublyList.add('indigo')
myDoublyList.add('cyan')
myDoublyList.get(10)
myDoublyList.getList()