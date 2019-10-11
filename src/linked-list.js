const Node = require('./node');

class LinkedList {
    constructor() {    
      this._head  = null;
      this._tail =null;          
      this.length = 0;       
    }

    append(data) {
        let node = new Node(data);
        if(this.length ===0){
          this._head = node;
          this._tail = node;
        }
        else{
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node; 
        }
        this.length ++;
        return this;    
    }

    head() {
      return this._head.data;
    }

    tail() {
      return this._tail.data;
    }

    at(index) {
        let search_elem = this._head;
      for(let i =0;i<index;i++){
          search_elem=search_elem.next;
      }
      return search_elem.data;
    }

    insertAt(index, data) {}

    isEmpty() {
      if(this.length!==0){
        return false;
      }
      return true;
    }
    clear() {
      this._head  = null;
      this._tail =null;          
      this.length = 0; 
      return this;
      
    }

    deleteAt(index) {
      
    }

    reverse() {      
      
    }

    indexOf(data) {}
}

module.exports = LinkedList;
