class Node{
    constructor(val){
        this.data = val;
        this.next = null;
    }
}
class SinglyLinkList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(xy){
        let newNode = new Node(xy)
        if(this.head ==null){
        this.head = newNode;
        this.tail = newNode;
    }else{
        this.tail.next = newNode;
        this.tail = newNode;

    }
    this.length += 1
    return this.length;

    }
    pop(){
        if(this.head == null){
            return "Undefine"
        }
        var CurrentTail = this.head;
        var newTail = CurrentTail;
        while(CurrentTail.next){
            newTail= CurrentTail;
            CurrentTail = CurrentTail.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length -= 1;
        if(this.length==0){
            this.head = null;
            this.tail= null;
        }
        return CurrentTail;
    }
    unshift(xy){
        let newNode = new Node(xy)
        if(this.head ==null){
            this.head = newNode;
            this.tail = newNode
        }else{
            this.newNode.next =this.head;
            this.head = newNode;
        }
        this.length += 1;
        return this.length
    }
    shift(){
        if(this.head ==null){
            return "Undefine"
        }
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length -= 1;
        if(this.length ==0){
            this.head =null;
            this.tail = null;
        }
        return currentHead
    }
    getNode(indx){
        if(indx <0 || indx >=this.length){
            return null;
        }
        var count =1;
        var currentHead = this.head;
        while(count != indx){
            currentHead = currentHead.next;
            count = count + 1;
        }
        return currentHead;
    }
    
}
const ab = new SinglyLinkList()