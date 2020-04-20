class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

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

    //a function to retrive data from list//
    get(index){
        //make sure that index is non-negative//
        if (index  > -1) {
            //pointer to go through the list//
            let current = this[head]
            //to keep track of index//
            let i = 0
            //check if the point is on empty or undefined index//
            while((current !== null) && (i < index) ){
                current = current.next
                i = i+1
            }
            //return if the index is non-null//
            return console.log(current.value)
        }
        else{
            //throw error for undefined index
            console.log('LinkedList: ', this[head])
            return undefined
        }
    }
}

myList = new LinkedList()
myList.add(1)
myList.add(2)
myList.add(3)
myList.add(4)
myList.add(5)
//-----------//
myList.get(1)


