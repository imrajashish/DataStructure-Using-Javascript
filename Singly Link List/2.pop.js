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
            this.length =0;
        }
        push(xyz){
            let newNode = new Node(xyz)
            if(this.head == null){
                this.head = newNode;
                this.tail = newNode;
            }else{
                this.tail.next = newNode;
                this.tail = newNode;
            }
            this.length = this.length + 1;
            return this.length
        }
        pop(){
            if(this.head == null){
                return "Not Any Value";

            }
            var currentTail = this.head;
            var newTail = currentTail;
            while(currentTail.next){
                newTail = currentTail;
                currentTail = currentTail.next
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
}
const ac = new SinglyLinkList()