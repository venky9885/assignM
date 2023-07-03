class stack
{
    constructor()
    {
        this.item = []
    }

    push(it)
    {
        this.item.push(it)

    }
    pop()
    {
        if(this.item.length!=0)
        {
            return this.item.pop()
        }
        return "the stack is already empty"
    }

}
s= new stack()
s.push(10)
console.log(s.pop());