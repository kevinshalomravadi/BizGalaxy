const fs = require('fs');
const html = fs.readFileSync('digital_decodes.html', 'utf8');

const scripts = html.match(/<script[^>]*>([\s\S]*?)<\/script>/g) || [];
console.log('Script tags count:', scripts.length);
scripts.forEach((s, i) => {
  console.log(`\n--- SCRIPT ${i} (length ${s.length}) ---`);
  console.log(s.slice(0, 1000));
});
