const fs = require('fs');
const html = fs.readFileSync('digital_decodes.html', 'utf8');

// Extract CSS
const styleMatch = html.match(/<style[^>]*>([\s\S]*?)<\/style>/);
if (styleMatch) {
  fs.writeFileSync('digital_decodes.css', styleMatch[1]);
  console.log('Saved digital_decodes.css. Length:', styleMatch[1].length);
}

// Extract structure of clients section
const clients = html.match(/<section[^>]*id="clients"[^>]*>([\s\S]*?)<\/section>/);
if (clients) {
  console.log('\n--- CLIENTS SECTION SNIPPET ---');
  console.log(clients[0].slice(0, 800));
}

// Extract structure of services section
const services = html.match(/<section[^>]*id="services"[^>]*>([\s\S]*?)<\/section>/);
if (services) {
  console.log('\n--- SERVICES SECTION SNIPPET ---');
  console.log(services[0].slice(0, 800));
}

// Extract structure of enquire section
const enquire = html.match(/<section[^>]*id="enquire"[^>]*>([\s\S]*?)<\/section>/);
if (enquire) {
  console.log('\n--- ENQUIRE SECTION SNIPPET ---');
  console.log(enquire[0].slice(0, 800));
}
