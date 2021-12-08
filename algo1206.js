/* Stacks
A stack is a LIFO data structure
LAST IN, FIRST OUT
LIFO / FILO
push - add to top
pop - remove from top
peek - check the top
isEmpty - check if the stack is empty, true/false
length - return size of stack
*/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class slStack {
    constructor() {
        this.top = null; // this.head, this.end
        this.length = 0;
    }

    // add to top
    push(newNode) {
        // this.top.next === null
        newNode.next = this.top;
        this.top = newNode;
        this.length++;
    }

    // remove from top
    pop() {
        //the stack is empty
       if(!this.top){
           return null;
       }
       var removedNode = this.top;
       this.top = this.top.next;
       removedNode.next = null;
       this.length--;
       return removedNode; 
    }

    // aka check top
    peek() {
        return this.top.data;
    }

    // check if empty
    isEmpty() {
        return this.top === null;
    }

    // "1" == 1 true
    // "1" === 1 false

    // length getter
    getLength() {
        return this.length;
        //var counter = 0;
        //var runner = this.top;
        // while(runner){
        //     counter++;
        //     runner = runner.next;
        // }
        // return counter;
    }
}

// don't forget to instantiate the slStack!
// add a few nodes first