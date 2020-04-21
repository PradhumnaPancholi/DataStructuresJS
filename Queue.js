class Queue{
    constructor(){
        this.data = {}
        this.headIndex = 0
        this.bottomIndex = 0
    }

    //to add a item//
    enqueue(item){
        this.data[this.bottomIndex] = item
        this.bottomIndex++
    }

    //to remove first item(FIFO)//
    dequeue(){
        if(this.bottomIndex > 0) {
            delete this.data[this.headIndex]
            this.headIndex++
        }
        else {
            throw new RangeError('The queue is empty')
        }
        
    }

    //return item at top//
    front(){
        let front = console.log(this.data[this.headIndex])
        return front
    } 
}

//Implementation//
let myQueue = new Queue()
myQueue.enqueue('Chandler Bing')
myQueue.enqueue('Pheoble Buffay')
myQueue.enqueue('Monica Geller')
console.log(myQueue)
myQueue.dequeue()
console.log(myQueue)
myQueue.front()