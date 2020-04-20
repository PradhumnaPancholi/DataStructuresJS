class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {

    //starts as empty || null
    constructor(){
        this.head = null
    }

    //function to add a node into LinkedList//
    add(data){
        
        //create a "Node" with given data//
        let newNode = new Node(data)

        //check if the list is empty//  
        if(this.head === null){
            //if yes, add new node as first element//
            this.head = newNode
            //print the LinkedList//
            console.log(`Added ${data} into the list`)
        }else{
            //start looking for empty/last node//
            let current  = this.head
            //follow the 'next' trail //
            while(current.next !== null){
                current = current.next
            }
            //assign the 'newNode' to 'next'
            current.next = newNode
            //print the LinkedList//
            console.log(`Added ${data} into the list`)
        }
    }

    //a function to retrive data from list//
    get(index){
        //make sure that index is non-negative//
        if (index  > -1) {
            //pointer to go through the list//
            let current = this.head
            //to keep track of index//
            let i = 0
            //iterate through list until to get till index or end(undefined)//
            while((current !== null) && (i < index) ){
                current = current.next
                i = i+1
            }
            //return if the index of non-null in not undefined ie. The value at given index unless it's out of range(undefined))//
            return current !== null ? console.log(`Value of index ${index}: ${current.value}`) : undefined
        }
        else{
            //return undefined for no existing index
            console.log('LinkedList: ', this.head)
            return undefined
        }
    }
    //function to remove a node//
    remove(index) {
    //take care od special cases: [1]. Empty list, [2]. 0 as in input index, [3]. Index out of range

        //operation can't be performed if idex is negave or the list is empty//
        if((this.head === null) || (index < 0)){
            throw new RangeError(`The ${index} is out of range`)
        }
        //operation to remove the first node(head) if there is only one node present in array//
        if(index === 0) {
            //store data in temp variable (to show in response)
            let data = this.head.value
            // replace the data in 'head' with 'next'(empty)//
            this.head = this.head.next
            //respond with a msg//
            console.info(`Deleted ${data} at index ${index}`)
            return
        }
    //operation to perform find and remove node from rest of list//
        
        //pointer to go through list//
        let current = this.head
        //to keep track of node before current in loop (to remove data from 'next)
        let previous = null
        //to keep track of index//
        let i = 0
        //pass through list until at index or end
        while((current !== null) && (index > i)){
            //store the value of current//
            previous = current
            //increment to keep going//
            current = current.next
            i = i+1
        }
        //if node at is found, remove data//
        if(current !== null){
            //skip over node to remove 
            //i.e remove the value of found index from 'previous.next' and attach the value to index after 'current'(the one we are removing)//
            previous.next = current.next
            //respond with msg//
            console.info(`Succesfully deleted ${current.value} at index ${index}`)
            return
        } 
        //if node is not found, throw error for invalid index//
        throw new RangeError(`Index ${index} doesn't exist on list`)
    }

    //a function to get list//
    getList(){
        console.log(this.head)
    }
    // attempts for extension:- insert at index, insert first, insert last, clear//
}

myList = new LinkedList()
myList.add('red')
myList.add('indigo')
myList.add('violet')
myList.add('cyan')
myList.add('magenta')
//-----------//
myList.get(1)
//-----------//
myList.remove(3)
//-----------//
myList.getList()


