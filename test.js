class bindinfo{
    constructor()
    {
        this.name = "Test"
    }
    hello(){
        return this.name;
    }
}

info = new bindinfo();
otherinfo = info.hello;
console.log(otherinfo.hello())