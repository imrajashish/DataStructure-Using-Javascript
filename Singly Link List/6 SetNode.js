class Node{
    constructor(val){
        this.data = val;
        this.next = null;
    }
}
class SinglyLinkList{
    constructor(){
        this.head = null
        this.tail = null;
        this.length =0;
    }
    push(xy){
        var newNode = new Node(xy)
        if(this.head == null){
            this.head = newNode;
            this.tail = newNode
        }else{
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length += 1;
        return this.length;
    }
    pop(){
        if(this.head == null){
            return Undefined;
        }
        var currentTail = this.head;
        var newTail = currentTail;
        while(currentTail.next){
            newTail = currentTail;
            currentTail=currentTail.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length -= 1;
        if(this.length==0){
            this.head = null;
            this.tail = null
        }
        return currentTail;
    }
    unshift(xy){
        var newNode = new Node(xy)
        if(this.head == null){
            this.head = newNode;
            this.tail = newNode;
        }else {
            this.newNode.next = this.head;
            this.head = newNode;
        }
        this.length += 1
        return this.length;
    }
    shift(){
        if(this.head == null){
            return "'Undefine'";
        }
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length -= 1;
        if(this.length ===0){
            this.tail = null;
        }
        return currentHead;
    }
    setNode(indx){
        if(indx <0 || indx>=indx.length){
            return "null";
        }
        var count = 1;
        var current = this.head;
        while(count != indx){
         current = current.next;
         count++;   
        }
        return current;
    }
    getNode(indx,val){
        var foundNode = this.getNode(indx);
        if(foundNode != null){
            foundNode= val;
            return true;
        }
        return false;
    }
}
const ab = new SinglyLinkList()