const Node = require ('/node.js')

function defaultEquals(a,b){ //
    return a === b;
}

module.exports = class LinkedList {
    constructor(equalsFn = defaultEquals){
        this.equalsFn=equalsFn;
        this.head = null;
    }

    push(element){ //adicionar valor no final da lista

        const node = new Node(element); // criando uma nova lista
        let current;
        if (this.head == null) { //verificando se o head eh vazio
            this.head = node
        } else { 
            current = current.next; //adicionar na lista
            while (current.next != null)
                current = current.next;
        }
        current.next=node
    this.count++; 
    }
    insert(element, index) {
        if(index >=0 && index <= this.count);
            const node = new Node(element);
        if (index===0) {
            const current = this.head;
            node.next = current
            this.head=node;
        } else {
            const previous = this.getElementAt(index - 1)
            previous.next = node;
        }
        this.count++;
        return true;
    }
    getElementAt(index) {
        if (index>= 0 && index <= this.count) {                              
            let node = this.head;
            for (let i = 0; i < index && node != null; i++)
                node = node.next;
        }
        return node;
    } 
    removeAt (index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            if (index ===0) {
                this.head=current.next;
            } else {
                const previous = this.getElementAt(index-1);
                current=previous.next;
                previous.next=current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }
        remove(element) {
            const index=this.index0f(element);
            return this.removeAt(index);
        }
        index0f(element) {
            let current=this.head;
            for (let i=0; i<this.size() && current != null; i++) {
                if (this.equalsFn(element, current.element)) {
                    return i;
                }
                current =current.next;
            }
            return-1
        }
        isEmpty() {
            return this.size() ===0;
        }
        size() {
            return this.count;
        }
        getHead() {
            return this.head;
        }
        





}