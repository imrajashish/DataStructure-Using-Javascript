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
    push(abc){
        let newNode = new Node(abc);
            if(this.head == null){
                this.head= newNode;
                this.tail = newNode

            } else {
                this.tail.next = newNode;
                this.tail = newNode;
            }
            this.length = this.length+1;
            return this.length;
    }
    pop(){
        if(!this.head){
           return "not find elements"
        }
        var CurrentTail = this.head;
        var newTail = CurrentTail;
        while(CurrentTail.next){
            newTail = CurrentTail;
            CurrentTail = CurrentTail.next;
        }
        this.tail = newTail;
            this.tail.next= null;
            this.length = this.length-1;
            if(this.length == 0){
                this.head = null;
                this.tail = null;
        }
        return this.length
    }
    unshift(x){
        let newNode = new Node(x);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode; 
        }else{
            newNode.next  = this.head;
            this.head = newNode;

        }
        this.length = this.length +1
        return this.length
    }
}
const ab = new SinglyLinkList()