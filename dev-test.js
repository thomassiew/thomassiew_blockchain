const Block = require('./block');

const fooBlock =Block.mineBlock(Block.genesis(),'Human');
console.log(fooBlock.toString());

const tndblock = Block.mineBlock(fooBlock,"Haithem");

console.log(tndblock.toString());


const wndblock = Block.mineBlock(tndblock,"Thomas");

console.log(wndblock.toString());