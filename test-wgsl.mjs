import { init, draw } from 'vgpu';
import fs from 'fs';

async function main() {
  const content = fs.readFileSync('./src/components/AeroShards.tsx', 'utf8');
  // Extract SHARD_SHADER
  const match = content.match(/const SHARD_SHADER = `([\s\S]*?)`;/);
  if (!match) return console.log('Shader not found');
  let shader = match[1];
  
  // Replace template variables like ${RIPPLE_TAIL} because we don't eval it
  shader = shader.replace(/\$\{RIPPLE_TAIL\}/g, '1.8');
  shader = shader.replace(/\$\{RIPPLE_SPEED\}/g, '4.2');

  try {
    const gpu = await init({ powerPreference: 'low-power' });
    gpu.onError(e => console.error('GPU ERROR:', e));
    const shardDraw = draw(gpu, {
      shader: shader,
      vertices: 6,
      blend: 'premultiplied',
      cull: 'none',
      depth: false,
      label: 'test'
    });
    await shardDraw.compile({ colors: ['rgba8unorm'] });
    console.log('Success');
  } catch (e) {
    console.error('Failed:', e);
  }
}
main();
