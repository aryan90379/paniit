const fs = require('fs');
let c = fs.readFileSync('src/components/AeroShards.tsx', 'utf8');
c = c.split('\\${').join('${');
fs.writeFileSync('src/components/AeroShards.tsx', c);
