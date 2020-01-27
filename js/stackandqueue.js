//Stack 
    // class Stack
   class StackNode {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}   
    class LinkedSatck {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    
    // push
    push(data) {
       
        let node = new StackNode(data);
        node.next =  this.top;
        this.top = node;

        this.size++;
    }
    // poped
    pop() {
        let result = this.top;
        this.top = this.top.next;

        this.size--;
        return result.data;
    }
    
    //Clear
    clear() {
        this.top = null;
    }

    //isEmpty
    isEmpty() {
        this.top = null;
        
    }

    // Print 
    print(){
        let list="";
        let current = this.top;
        list+="<ol>";
        while(current)
        {
            list+= "<li>"+ current.data+"</li>";
            current=current.next;
        }
        list+="</ol>";
        document.getElementById('result').innerHTML=list
    }
}    

    let ss = new LinkedSatck();
    let push = document.getElementById("push");
    let pop = document.getElementById("pop");
    let clear = document.getElementById("clear");
    let next = document.getElementById("next");

    // function push
    push.onclick = function() {
        let txt = document.getElementById("txt").value;
        if(txt.length > 0 ){
            ss.push(txt);
            ss.print();
        }else{
            alert("Add New StackNode");
        }
    }
    // function pop
    pop.onclick = function() {
        ss.pop();
        ss.print();
    }
    // function clear
    clear.onclick = function(){
        ss.clear();
        ss.print();
    }
    // function next 
    next.onclick = function() {
        
    }

//Queue
    //class queue
    class queueNode {
        constructor(data){
            this.data = data;
            this.next = null;
        }
    }
    class LinkedQueue {
        constructor() {
            this.queue = null;
            this.back = null;
        }
    //Enqueue
    push(data) {
        let node = new queueNode(data);
        


         }
    //Print
    print(){
        let list="";

        let current = this.top;
        list+="<ol>";
        while(current)
        {
            list+= "<li>"+ current.data+"</li>";
            current = current.next;
        }
        list+= "</ol>";
        document.getElementById("result2").innerHTML = list
        }
    }

    let q = new LinkedQueue ();
     
    enqueue.onclick = function() {
        
    }


  