class Block {
    constructor(timestamp,lastHash,hash,data) {
        this.timestamp = timestamp;
        this.lasthash = lastHash;
        this.hash = hash;
        this.data = data;
    }

    toString() {
        return `Block -
            Timestamp: ${this.timestamp}
            Last Hash: ${this.lasthash.substring(0,10)}
            Hash     : ${this.hash.substring(0,10)}
            Data     : ${this.data}
        `;
    }

    static genesis() {
        return new this('Genesis time', '-----','firsthash',[]);
    }

    static mineBlock(lastBlock,data){
        const timestamp = Date.now();
        const lastHash = lastBlock.hash;
        const hash = 'todo-hash';
        
        return new this(timestamp,lastHash,hash,data);
    }
}

module.exports = Block;