
struct StyleParams {
  viewport: vec4f,
  background: vec4f,
  mode: vec4f,
}
@group(0) @binding(0) var sourceTexture: texture_2d<f32>;
@group(0) @binding(1) var sourceSampler: sampler;
@group(0) @binding(2) var<uniform> style: StyleParams;

fn sampleSource(pixel: vec2f) -> vec3f {
  if (any(pixel < vec2f(0.0)) || any(pixel >= style.viewport.xy)) { return style.background.rgb; }
  return textureSampleLevel(sourceTexture, sourceSampler, pixel / style.viewport.xy, 0.0).rgb;
}
fn inkLevel(color: vec3f) -> f32 {
  // Measure contrast against the chosen background, not black: white stays empty too.
  return clamp(dot(abs(color - style.background.rgb), vec3f(0.2126, 0.7152, 0.0722)) * 2.4, 0.0, 1.0);
}

const INNER = array<vec2f, 6>(vec2f(0.28, 0.26), vec2f(0.72, 0.14), vec2f(0.28, 0.56), vec2f(0.72, 0.44), vec2f(0.28, 0.86), vec2f(0.72, 0.74));
const OUTER = array<vec2f, 10>(
  vec2f(0.28, -0.2), vec2f(0.72, -0.2), vec2f(-0.22, 0.25), vec2f(1.22, 0.25),
  vec2f(-0.22, 0.5), vec2f(1.22, 0.5), vec2f(-0.22, 0.75), vec2f(1.22, 0.75),
  vec2f(0.28, 1.2), vec2f(0.72, 1.2)
);
const RING = array<vec2f, 6>(vec2f(1.0, 0.0), vec2f(0.5, 0.8660254), vec2f(-0.5, 0.8660254),
  vec2f(-1.0, 0.0), vec2f(-0.5, -0.8660254), vec2f(0.5, -0.8660254));
const SHAPES = array<vec3f, 44>(
  vec3f(0.000000, 0.000000, 0.000000),
  vec3f(0.000000, 0.000000, 0.000000),
  vec3f(0.000000, 0.000000, 0.145985),
  vec3f(0.000000, 0.842105, 0.349057),
  vec3f(0.603774, 0.364706, 0.562044),
  vec3f(0.306569, 0.684211, 0.433962),
  vec3f(0.226415, 0.000000, 0.401460),
  vec3f(0.401460, 0.000000, 0.226415),
  vec3f(0.509434, 0.352941, 0.671533),
  vec3f(0.671533, 0.394737, 0.509434),
  vec3f(0.471698, 0.470588, 0.364964),
  vec3f(0.364964, 0.526316, 0.471698),
  vec3f(0.188679, 0.517647, 0.328467),
  vec3f(0.328467, 0.578947, 0.188679),
  vec3f(0.490566, 0.082353, 0.277372),
  vec3f(0.277372, 0.092105, 0.490566),
  vec3f(0.528302, 0.282353, 0.649635),
  vec3f(0.649635, 0.315789, 0.528302),
  vec3f(0.886792, 0.611765, 1.000000),
  vec3f(1.000000, 0.684211, 0.886792),
  vec3f(0.415094, 0.329412, 0.467153),
  vec3f(0.467153, 0.368421, 0.415094),
  vec3f(0.377358, 0.376471, 0.401460),
  vec3f(0.116788, 0.460526, 0.358491),
  vec3f(0.358491, 0.411765, 0.116788),
  vec3f(0.401460, 0.421053, 0.377358),
  vec3f(0.415094, 0.564706, 0.401460),
  vec3f(0.167883, 0.460526, 0.490566),
  vec3f(0.490566, 0.411765, 0.167883),
  vec3f(0.401460, 0.631579, 0.415094),
  vec3f(0.424528, 0.235294, 0.569343),
  vec3f(0.481752, 0.644737, 0.594340),
  vec3f(0.641509, 0.764706, 0.379562),
  vec3f(0.379562, 0.855263, 0.641509),
  vec3f(1.000000, 0.894118, 0.927007),
  vec3f(0.927007, 1.000000, 1.000000),
  vec3f(0.905660, 1.000000, 0.744526),
  vec3f(0.912409, 0.960526, 0.849057),
  vec3f(0.933962, 0.858824, 0.569343),
  vec3f(0.700730, 0.552632, 0.556604),
  vec3f(0.556604, 0.494118, 0.700730),
  vec3f(0.569343, 0.960526, 0.933962),
  vec3f(0.801887, 0.764706, 0.664234),
  vec3f(0.664234, 0.552632, 0.660377)
);
fn edgeContrast(value: f32, outside: f32) -> f32 {
  let peak = max(max(value, outside), 0.0001);
  return value * value / peak;
}
@fragment
fn fs_main(@builtin(position) pixel: vec4f) -> @location(0) vec4f {
  let base = floor(pixel.xy) * style.viewport.zw;
  var values: array<f32, 6>;
  var colorSum = vec3f(0.0);
  var weightSum = 0.0;
  for (var i = 0u; i < 6u; i++) {
    let center = base + INNER[i] * style.viewport.zw;
    var color = sampleSource(center);
    for (var tap = 0u; tap < 6u; tap++) {
      color += sampleSource(center + RING[tap] * style.viewport.w * 0.161);
    }
    color /= 7.0;
    values[i] = inkLevel(color);
    colorSum += color * values[i];
    weightSum += values[i];
  }
  if (weightSum < 0.025) { return vec4f(style.background.rgb, 0.0); }
  var edges: array<f32, 10>;
  for (var i = 0u; i < 10u; i++) { edges[i] = inkLevel(sampleSource(base + OUTER[i] * style.viewport.zw)); }
  values[0] = edgeContrast(values[0], max(max(edges[0], edges[1]), max(edges[2], edges[4])));
  values[1] = edgeContrast(values[1], max(max(edges[0], edges[1]), max(edges[3], edges[5])));
  values[2] = edgeContrast(values[2], max(edges[2], max(edges[4], edges[6])));
  values[3] = edgeContrast(values[3], max(edges[3], max(edges[5], edges[7])));
  values[4] = edgeContrast(values[4], max(max(edges[4], edges[6]), max(edges[8], edges[9])));
  values[5] = edgeContrast(values[5], max(max(edges[5], edges[7]), max(edges[8], edges[9])));
  let peak = max(max(max(values[0], values[1]), max(values[2], values[3])), max(values[4], values[5]));
  let gain = 1.0 / max(peak, 0.001);
  let a = vec3f(values[0], values[1], values[2]);
  let b = vec3f(values[3], values[4], values[5]);
  // Normalize shape separately from ink color so thin, dim shards do not all select space.
  let shapeA = a * sqrt(a * gain) * gain;
  let shapeB = b * sqrt(b * gain) * gain;
  var best = 0u;
  var bestDistance = 100.0;
  for (var glyph = 0u; glyph < 22u; glyph++) {
    let da = shapeA - SHAPES[glyph * 2u];
    let db = shapeB - SHAPES[glyph * 2u + 1u];
    let distance = dot(da, da) + dot(db, db);
    if (distance < bestDistance) { best = glyph; bestDistance = distance; }
  }
  // RGB stores the scene palette; alpha is an exact byte-sized glyph index, not opacity.
  let ink = style.background.rgb + (colorSum / weightSum - style.background.rgb) * 2.2;
  return vec4f(clamp(ink, vec3f(0.0), vec3f(1.0)), f32(best) / 255.0);
}

