const fs = require('fs');
const content = fs.readFileSync('src/components/AeroShards.tsx', 'utf8');
const code = content.split('const parseColor =')[0]; 

const evalCode = code.replace("'use client';", "").replace(/import .*;/g, '') + "\nconsole.log(SHARD_SHADER);\n";
fs.writeFileSync('temp2.js', evalCode);
