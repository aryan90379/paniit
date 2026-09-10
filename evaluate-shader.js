const fs = require('fs');

const content = fs.readFileSync('src/components/AeroShards.tsx', 'utf8');
const code = content.split('const parseColor =')[0]; // get everything up to shaders
const evalCode = code.replace("'use client';", "").replace(/import .*;/g, '') + "\nconsole.log(ASCII_CELL_SHADER);\n";
fs.writeFileSync('temp.js', evalCode);
