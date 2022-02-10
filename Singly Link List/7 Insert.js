class Node{
    constructor(val){
        this.data = val;
        this.next = null;
    }
}
class SinglyLinklist{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val)
        if(this.head == null){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length = this.length+1
        return this.length
    }
    pop(){
        if(this.head==null){
            return "undefine";
        }
        var currentTail = this.head;
        var newTail = currentTail;
        while(currentTail.next){
            newTail = currentTail;
            currentTail = currentTail.next;
        } 
        this.tail = newTail;
        this.tail.next = null;
        this.length -= 1
        if(this.length ==0){
            this.head = null;
            this.tail = null
        }
        return currentTail
    }
    unshift(val){
        let newNode = new Node(val)
        if(this.head == null){
            this.head = newNode;
            this.tail = newNode;
        }else {
            this.newNode.next = this.head;
            newNode = this.head
        }
        return this.length = this.length+1
        return this.length
    }
    shift(){
        if(this.head == null){
            return "Undefine"
        }
        var currentHead = this.head;
        this.head = currentHead.next;
        if(this.length ==0){
            this.tail =null;
        }
        return currentHead;
    }
}
const ab = new SinglyLinklist()