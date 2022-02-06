class Node{
    constructor(val){
        this.data = val;
        this.null = null;
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
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length = this.length+1
        return this.length;
    }
    pop(){
        
    }
}
const ab = new SinglyLinkList()