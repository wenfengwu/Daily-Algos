class DLLNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

// DLLists have both a this.head and this.tail pointer
class DLList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

     // == Main Methods ==

    // push to head
    // myDll.addHead(new DLLNode(33));
    // push to head
    addHead(node) {
        if (!this.head) { // empty list
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;

            // this.tail.next = node;
            // node.prev = this.tail;
            // this.tail = node;
        }
    }

    // pop from tail
    removeTail() {
        if (this.head == null) return; // empty list
        if (this.head === this.tail) { // one node
            var temp = this.tail; // set a temp
            this.head = null; // disconnect the head
            this.tail = null; // disconnect the tail
            return temp;
        }
        var temp = this.tail; // set a temp
        this.tail = tail.prev; // move the tail back
        this.tail.next = null; // null out the new tail's next
        temp.prev = null; // null out the temp's prev
        return temp;
    }

    // return is empty
    isEmpty() {
        return this.head === null;
    }

    prependClean(target, node) {
        var runner = this.head; // set a runner
        if (runner.data === target) {
            this.addHead(node);
            return;
        }
        while (runner) { // loop
            if (runner.data !== target) { // check runner data against the target
                runner = runner.next;     // move forward if no match
            } else {                      // else we found a match
                node.next = runner;       // point the node at the matched runner
                node.prev = runner.prev;  // point the node's prev to the matched runner's prev
                node.prev.next = node;    // link previous node next
                runner.prev = node;       // link runner to node
                return;
            }
        }
    }

    // return length
    size() { }

    // == Bonus Methods, just inverted versions of the first set ==

    // push to tail
    addTail(node) { }

    // pop from head
    removeHead() { }
}
// Remember to instantiate the DLL!!
// add a few nodes ex. // myDll.addHead(new DLLNode(33));
// print the DLL -> console.log(myDll) did the nodes get added?
// remove a few nodes from tail
// print the DLL -> did the correct nodes get removed?