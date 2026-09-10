// ... (code omitted for brevity, reusing the previous file)
const fs = require('fs');
eval(fs.readFileSync('test-gen.js', 'utf8').replace(/console.time.*/g, ''));
const p = generatePuzzle('Expert').puzzleGrid;
let empty = 0;
for(let r=0;r<9;r++) for(let c=0;c<9;c++) if(p[r][c]==='.') empty++;
console.log('Empty cells in Expert:', empty);
