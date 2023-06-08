class HashTable{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }
    hash(key){
        let hash=0;
        for(let i=0;i<key.length;i++){
            hash+=key.charCodeAt(i)
        }
        return hash%this.size
    }
    set(key,value){
        const index=this.hash(key)
        if(!this.table[index]){
            this.table[index]=[]
        }
            this.table[index].push([key,value])
    }
    get(key){
        const index=this.hash(key)
        if(!this.table[index]){
            return undefined
        }
            for(let i=0;i<this.table[index].length;i++){
                if(this.table[index][i][0]===key){
                    return this.table[index][i][1]
                }
            }
            return undefined
    }
    remove(key){
        const index=this.hash(key)
        if(!this.table[index]){
            return undefined
        }
        for(let i=0;i<this.table[index].length;i++){
            if(this.table[index][i][0]===key){
                this.table[index].splice(i,1)
                return true
            }
        }
        return false
    }
    display(){
            for(let i=0;i<this.table.length;i++){
                if(this.table[i]){
                    console.log(i,this.table[i]);
                }
            }
        }
    }
const ht=new HashTable(50)
ht.set("name","sajaf")
ht.set("kane",30)
ht.remove("name")
console.log(ht.get("name"));
ht.display()