class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}
//creating first node//
const head = new Node(1)
console.log('Chain: ', head)

//creating and  adding second node//
head.next = new Node(2)
console.log('Chain', head)

//creating third node//
head.next.next = new Node(3)
console.log('Chain', head)

//adding value of 'next' in nodes to ck//
// head.next = node2
// node2.next = node3

//printing the chain of nodes//
// console.log(head)
