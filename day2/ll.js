
class node{

    constructor(ele){

        this.data=ele

        this.next=null

    }

}

class ll{

    constructor(){

        this.head=null

        this.size=0

    }

    add(ele){

        var n=new node(ele)

        if(this.head==null)

        {

            this.head=n

        }

        else{

            var n=new node(ele)

            curr=this.head

            while(this.next)

            {

                curr=curr.next

            }

            curr.next=n

        }

        this.size+=1

    }

    addatend(ele){

        var n=new node(ele)

        var curr=this.head

            while(curr.next)

            {

                curr=curr.next

            }

            curr.next=n

        this.size+=1




    }

    addatfront(ele)

    {

        var n=new node(ele)

        n.next=this.head

        this.head=n

    }

    addat(ele,nn){

        var n=new node(ele)

        if(nn<0 || nn>this.size){

                this.addatend(ele);




        }

        else{

            var curr,prev;

            curr=this.head;

            if(nn==0)

            {

               this.addatfront(ele)

            }

            else{

                curr=this.head

                var it=0

                while(it<nn){

                    it++;

                    prev=curr;

                    curr=curr.next;

                }

                n.next=curr;

                prev.next=n;

            }

            this.size+=1;

        }




    }

    delitem(ele){

        var current = this.head;

        var prev = null;

        while (current != null) {

            if (current.data === ele) {

                if (prev == null) {

                    this.head = current.next;

                } else {

                    prev.next = current.next;

                }

                this.size--;

                return current.data;

            }

            prev = current;

            current = current.next;

        }

        return -1;

    }

    display(){

        var curr=this.head

        console.log("***************************")

        while(curr)

        {

            console.log(curr.data);

            curr=curr.next

        }

        console.log("***************************")

    }

}




var linkd= new ll()

linkd.add("eurpoe")

linkd.display()

linkd.addat("pacific",11)

linkd.display()

linkd.delitem("pacific")

linkd.display()


