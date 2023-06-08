class HashTable{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }
    hash(key){
        let total=0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total%this.size
    }
    set(key,value){
        this.table[this.hash(key)]=value
    }
    get(key){
        return this.table[this.hash(key)]
    }
    remove(key){
        return this.table[this.hash(key)]=undefined
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i]);
            }
        }
    }
}
const hash=new HashTable(50)
hash.set("name","sajad")
console.log(hash.get("name"));
hash.display()