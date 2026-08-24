const fs = require('fs');

// 1. Update contact.tsx
let contactCode = fs.readFileSync('src/routes/contact.tsx', 'utf8');
contactCode = contactCode.replace(/hello@joywater\.in/g, "joywaterworld@gmail.com");
fs.writeFileSync('src/routes/contact.tsx', contactCode);

// 2. Update Footer.tsx
let footerCode = fs.readFileSync('src/components/site/Footer.tsx', 'utf8');
footerCode = footerCode.replace(/hello@joywater\.in/g, "joywaterworld@gmail.com");
footerCode = footerCode.replace(
  /import \{ Phone, Mail, MapPin \} from "lucide-react";/,
  `import { Phone, Mail, MapPin, Instagram } from "lucide-react";`
);

const instagramLink = `
            <li className="flex items-start gap-2">
              <Instagram className="h-4 w-4 mt-0.5 text-gold" />{" "}
              <a href="https://www.instagram.com/joywater.in?igsh=MW02bmdra293bzAydg%3D%3D" target="_blank" rel="noreferrer" className="hover:text-gold">
                Instagram
              </a>
            </li>`;

footerCode = footerCode.replace(
  /joywaterworld@gmail\.com\s*<\/a>\s*<\/li>/,
  `joywaterworld@gmail.com\n              </a>\n            </li>${instagramLink}`
);
fs.writeFileSync('src/components/site/Footer.tsx', footerCode);

console.log("Updated contact info");
