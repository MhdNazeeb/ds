class HashTable{
    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }
    hash(key){
        let total = 0;
        for(let i=0;i<key.length;i++){
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }
    set(key,value){
        const index = this.hash(key);
        if (!this.table[index]) {
            this.table[index] = [];
        }
        this.table[index].push([key, value]);
    }
    get(key){
        const index = this.hash(key);
        if (!this.table[index]) {
            return undefined;
        }
        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i][0] === key) {
                return this.table[index][i][1];
            }
        }
        return undefined;
    }
    remove(key){
        const index = this.hash(key);
        if (!this.table[index]) {
            return undefined;
        }
        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i][0] === key) {
                this.table[index].splice(i, 1);
                return true;
            }
        }
        return false;
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
ht.set("nihal",15)
ht.set("nihal",5)
ht.set("nihal",5)

console.log(ht.get("nihal"));
ht.display()