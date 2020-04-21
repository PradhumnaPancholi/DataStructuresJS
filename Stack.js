// avoided use of array as it seems poor implementation as Array works like Stak itself//
//  Also used indexing from 0 by design//
class Stack{
    constructor(){
        //an simple empty array to store data.
        // this.data = []
        //this.length = 0
        this.data = {}
        this.size = 0
    }

    push(item){
        // this.data.push(item)
        // console.log(`Added ${item} to the stack`)
        // return
        this.data[this.size] = item
        this.size++
        console.log(`Added ${item} to the stack`)
        return
    }

    pop(){
        // console.log(`Removing ${this.data[this.data.length - 1]} from the stack`)
        // this.data.pop()
        // return 
        if(this.size > 0){
            delete this.data[this.size - 1]
            this.size--
        } 
        else{
            throw new RangeError('The stack is empty')
        }
    }

    //peek returns the element on the 'top' of Stack
    peek(){
        console.log('Element on top of Stack: ',this.data[this.size - 1])
        return this.data[this.size-1]
    }

}

//Implementation//
// let myStack = new Stack()
//push//
// myStack.push('Dwight Schrute')
// myStack.push('Creed')
// myStack.push('Michael Scott')
// console.log(myStack)
// //pop//
// myStack.pop()
// console.log(myStack)
// //peek//
// myStack.peek()

//new implementation//
let myStack = new Stack()

myStack.push('Michael Scott')
myStack.push('Jim Haplert')
myStack.push('Dwight Schrute')
console.log(myStack)
myStack.pop()
console.log(myStack)
myStack.peek()
