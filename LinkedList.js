class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}
//creating first node//
const node1 = new Node(1)
console.log('Node1 : ', node1)

//creating second node//
const node2 = new Node(2)
console.log('Node2: ', node2)

//creating third node//
const node3 = new Node(3)
console.log('Node2: ', node3)

//adding value of 'next' in nodes//
node1.next = node2
node2.next = node3

//printing the chain of nodes//
console.log(node1)
