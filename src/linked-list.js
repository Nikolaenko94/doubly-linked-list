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
     if(this._head){
        return this._head.data
     }
     return null;
    }

    tail() {
      if(this._tail){
        return this._tail.data       
      }
      return null;
    }

    at(index) {
        let search_elem = this._head;
      for(let i =0;i<index;i++){
          search_elem=search_elem.next;
      }
      return search_elem.data;
    }

    insertAt(index, data) {
      if(index < 0 || this.length < index){
        return false;
      }
      let node = new Node(data);
      
      if(index === 0){              
        node.next = this._head;
        this._head.prev = node;       
        this._head = node;        
      }
      else if(index === this.length){
        this._tail.next = node;
        node.prev = this._tail;
        this._tail = node;
        
      }
      else{
        let start = this._head;
        let prev = null;
        let counter = 0;
        while(counter < index){
          prev = start;
          start = start.next;
          counter++;
        }
        prev.next =node;
        node.prev = prev;
        node.next = start;
        start.prev = node;
      }
      this.length++;

    }

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
      if(index<0 || this.length<=index){
        return null;
      }
      let search;
      if(index ===0){
        search = this._head;
        this._head = this._head.next;
        this._head.prev = null;
      }
      else if( index === this.length -1){
        search = this._tail;
        this._tail = this._tail.prev;
        this._tail.next = null;
      }
      else{
        let counter =0;
        let start = this._head;
        while(counter < index){
          start = start.next;
          counter ++
        }
        start.prev.next= start.next;
        start.next.prev = start.prev;
        }
      
    }

    reverse() {      
      
    }

    indexOf(data) {}
}

module.exports = LinkedList;
