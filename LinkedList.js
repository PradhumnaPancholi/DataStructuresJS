class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}
// //creating first node//
// const head = new Node(1)
// console.log('Chain: ', head)

// //creating and  adding second node//
// head.next = new Node(2)
// console.log('Chain', head)

// //creating and adding third node//
// head.next.next = new Node(3)
// console.log('Chain', head)

const head = Symbol('head')

class LinkedList {

    //starts as empty || null
    constructor(){
        this[head] = null
    }

    //function to add a node into LinkedList//
    add(data){
        
        //create a "Node" with given data//
        let newNode = new Node(data)

        //check if the list is empty//  
        if(this[head] === null){
            //if yes, add new node as first element//
            this[head] = newNode
            //print the LinkedList//
            console.log('LinkedList: ', this[head])
        }else{
            //start looking for empty/last node//
            let current  = this[head]
            //follow the 'next' trail //
            while(current.next !== null){
                current = current.next
            }
            //assign the 'newNode' to 'next'
            current.next = newNode
            //print the LinkedList//
            console.log('LinkedList: ', this[head])
        }
    }
}

myList = new LinkedList()
myList.add(1)
myList.add(2)
