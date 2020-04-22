class HashTable{
    constructor(size){
        this.size = size
        this.buckets = Array(this.size)

        //create a 'Map' to store data for each bucket//
        for (let i = 0; i < this.buckets.length; i++){
            this.buckets[i] = new Map()
        }
    }

    hash(key){
        let hashKey = ''

        for(let i = 0; i < key.length; i++){
            hashKey = key.charCodeAt(i)
        }
        hashKey = hashKey % this.size
        return hashKey
    }

    insert(key, value){
        let index = this.hash(key)

        this.buckets[index].set(key, value)
    }

    remove(key){
        let index = this.hash(key)

        let record = this.buckets[index].get(key)
        this.buckets[index].delete(key)
        console.log(`Succesfully deleted ${record}`)
    }

    search(key){
        let index = this.hash(key)

        let record = this.buckets[index].get(key)
        console.log(record)
        return record
    }
}

// Implementation//
let hashBrown = new HashTable(10)
hashBrown.insert('pnp', 'pradhumna')
hashBrown.insert('jh', 'jim')
hashBrown.insert('dks', 'dwight')
hashBrown.insert('pb', 'pam')

console.log(hashBrown)
hashBrown.remove('pnp')
hashBrown.search('dks')