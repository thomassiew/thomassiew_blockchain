const Block = require('./block');

const fooBlock =Block.mineBlock(Block.genesis(),'food');
console.log(fooBlock.toString());