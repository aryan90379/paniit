const fs = require('fs');
let c = fs.readFileSync('src/components/AeroShards.tsx', 'utf8');
c = c.split('[\\\\da-f]').join('[\\da-f]');
fs.writeFileSync('src/components/AeroShards.tsx', c);
