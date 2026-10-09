const fs = require('fs');
const html = fs.readFileSync('digital_decodes.html', 'utf8');

console.log('--- HEAD ---');
const title = html.match(/<title>(.*?)<\/title>/);
console.log('Title:', title ? title[1] : 'none');

console.log('--- BODY SECTIONS ---');
const sections = html.match(/<section[^>]*>([\s\S]*?)<\/section>/g) || [];
console.log('Section count:', sections.length);
sections.forEach((sec, i) => {
  const id = sec.match(/id="([^"]+)"/);
  const h2 = sec.match(/<h2[^>]*>([\s\S]*?)<\/h2>/);
  console.log(`[${i}] id=${id ? id[1] : 'none'} h2=${h2 ? h2[1].replace(/<[^>]+>/g, '').trim() : 'none'}`);
});

console.log('\n--- HEADER / NAV ---');
const header = html.match(/<header[^>]*>([\s\S]*?)<\/header>/);
if (header) {
  console.log(header[0].slice(0, 500));
}

console.log('\n--- HERO ---');
if (sections.length > 0) {
  console.log(sections[0].slice(0, 1000));
}
