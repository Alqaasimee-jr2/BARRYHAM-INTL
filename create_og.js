const sharp = require('sharp');
const fs = require('fs');

async function createOgImage() {
  const svgBanner = `
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0B192C" />
        <stop offset="50%" stop-color="#1E3E62" />
        <stop offset="100%" stop-color="#000000" />
      </linearGradient>
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#B08D57" />
        <stop offset="100%" stop-color="#D4AF37" />
      </linearGradient>
    </defs>

    <!-- Background -->
    <rect width="1200" height="630" fill="url(#bgGrad)" />
    
    <!-- Accent Line -->
    <rect x="80" y="80" width="1040" height="4" fill="url(#goldGrad)" />
    
    <!-- Badge -->
    <rect x="80" y="120" width="340" height="36" rx="18" fill="#B08D57" fill-opacity="0.25" stroke="#B08D57" stroke-width="1.5" />
    <text x="250" y="143" text-anchor="middle" font-family="Arial, sans-serif" font-weight="bold" font-size="13" fill="#D4AF37" letter-spacing="3">OFFICIAL DIRECT DISTRIBUTOR</text>

    <!-- Title -->
    <text x="80" y="225" font-family="Georgia, serif" font-weight="bold" font-size="54" fill="#FFFFFF">BARRYHAM INT'L LTD</text>
    <text x="80" y="275" font-family="Arial, sans-serif" font-weight="600" font-size="26" fill="#D4AF37">Premium Sanitary Ware, Fittings &amp; Electricals</text>

    <!-- Description -->
    <text x="80" y="330" font-family="Arial, sans-serif" font-size="19" fill="#E0E0E0">Direct Representatives for Leading European &amp; Global Manufacturers</text>
    <text x="80" y="360" font-family="Arial, sans-serif" font-size="17" fill="#A0A0A0">Supply &amp; Installation across Lagos, Agege, Igando, and All Nigeria</text>

    <!-- Brand Pills Line 1 -->
    <g transform="translate(80, 400)">
      <rect x="0" y="0" width="145" height="34" rx="6" fill="#FFFFFF" fill-opacity="0.1" stroke="#FFFFFF" stroke-opacity="0.2" />
      <text x="72" y="22" text-anchor="middle" font-family="Arial, sans-serif" font-weight="bold" font-size="12" fill="#FFFFFF">IDEAL STANDARD</text>

      <rect x="155" y="0" width="155" height="34" rx="6" fill="#FFFFFF" fill-opacity="0.1" stroke="#FFFFFF" stroke-opacity="0.2" />
      <text x="232" y="22" text-anchor="middle" font-family="Arial, sans-serif" font-weight="bold" font-size="12" fill="#FFFFFF">ARMITAGE SHANKS</text>

      <rect x="320" y="0" width="100" height="34" rx="6" fill="#FFFFFF" fill-opacity="0.1" stroke="#FFFFFF" stroke-opacity="0.2" />
      <text x="370" y="22" text-anchor="middle" font-family="Arial, sans-serif" font-weight="bold" font-size="12" fill="#FFFFFF">GEBERIT</text>

      <rect x="430" y="0" width="90" height="34" rx="6" fill="#FFFFFF" fill-opacity="0.1" stroke="#FFFFFF" stroke-opacity="0.2" />
      <text x="475" y="22" text-anchor="middle" font-family="Arial, sans-serif" font-weight="bold" font-size="12" fill="#FFFFFF">GROHE</text>

      <rect x="530" y="0" width="90" height="34" rx="6" fill="#FFFFFF" fill-opacity="0.1" stroke="#FFFFFF" stroke-opacity="0.2" />
      <text x="575" y="22" text-anchor="middle" font-family="Arial, sans-serif" font-weight="bold" font-size="12" fill="#FFFFFF">KOHLER</text>

      <rect x="630" y="0" width="90" height="34" rx="6" fill="#FFFFFF" fill-opacity="0.1" stroke="#FFFFFF" stroke-opacity="0.2" />
      <text x="675" y="22" text-anchor="middle" font-family="Arial, sans-serif" font-weight="bold" font-size="12" fill="#FFFFFF">REIGNER</text>

      <rect x="730" y="0" width="80" height="34" rx="6" fill="#FFFFFF" fill-opacity="0.1" stroke="#FFFFFF" stroke-opacity="0.2" />
      <text x="770" y="22" text-anchor="middle" font-family="Arial, sans-serif" font-weight="bold" font-size="12" fill="#FFFFFF">ROCA</text>

      <rect x="820" y="0" width="80" height="34" rx="6" fill="#FFFFFF" fill-opacity="0.1" stroke="#FFFFFF" stroke-opacity="0.2" />
      <text x="860" y="22" text-anchor="middle" font-family="Arial, sans-serif" font-weight="bold" font-size="12" fill="#FFFFFF">VADO</text>
    </g>

    <!-- Brand Pills Line 2 -->
    <g transform="translate(80, 446)">
      <rect x="0" y="0" width="115" height="34" rx="6" fill="#FFFFFF" fill-opacity="0.1" stroke="#FFFFFF" stroke-opacity="0.2" />
      <text x="57" y="22" text-anchor="middle" font-family="Arial, sans-serif" font-weight="bold" font-size="12" fill="#FFFFFF">HANSGROHE</text>

      <rect x="125" y="0" width="180" height="34" rx="6" fill="#FFFFFF" fill-opacity="0.1" stroke="#FFFFFF" stroke-opacity="0.2" />
      <text x="215" y="22" text-anchor="middle" font-family="Arial, sans-serif" font-weight="bold" font-size="12" fill="#FFFFFF">ARISTON WATER HEATER</text>

      <rect x="315" y="0" width="130" height="34" rx="6" fill="#FFFFFF" fill-opacity="0.1" stroke="#FFFFFF" stroke-opacity="0.2" />
      <text x="380" y="22" text-anchor="middle" font-family="Arial, sans-serif" font-weight="bold" font-size="12" fill="#FFFFFF">COLEMAN CTIL</text>

      <rect x="455" y="0" width="150" height="34" rx="6" fill="#FFFFFF" fill-opacity="0.1" stroke="#FFFFFF" stroke-opacity="0.2" />
      <text x="530" y="22" text-anchor="middle" font-family="Arial, sans-serif" font-weight="bold" font-size="12" fill="#FFFFFF">VILLEROY &amp; BOCH</text>

      <rect x="615" y="0" width="100" height="34" rx="6" fill="#FFFFFF" fill-opacity="0.1" stroke="#FFFFFF" stroke-opacity="0.2" />
      <text x="665" y="22" text-anchor="middle" font-family="Arial, sans-serif" font-weight="bold" font-size="12" fill="#FFFFFF">VARMORA</text>

      <rect x="725" y="0" width="95" height="34" rx="6" fill="#FFFFFF" fill-opacity="0.1" stroke="#FFFFFF" stroke-opacity="0.2" />
      <text x="772" y="22" text-anchor="middle" font-family="Arial, sans-serif" font-weight="bold" font-size="12" fill="#FFFFFF">TWYFORD</text>

      <rect x="830" y="0" width="75" height="34" rx="6" fill="#FFFFFF" fill-opacity="0.1" stroke="#FFFFFF" stroke-opacity="0.2" />
      <text x="867" y="22" text-anchor="middle" font-family="Arial, sans-serif" font-weight="bold" font-size="12" fill="#FFFFFF">SANIT</text>
    </g>

    <!-- Footer Contact -->
    <rect x="0" y="550" width="1200" height="80" fill="#07101E" />
    <text x="80" y="597" font-family="Arial, sans-serif" font-weight="600" font-size="18" fill="#D4AF37">📞 0803 475 0270 | 0808 444 6319</text>
    <text x="650" y="597" font-family="Arial, sans-serif" font-size="18" fill="#FFFFFF">🌐 https://barryham.site | ✉️ bihl.sales@gmail.com</text>
  </svg>
  `;

  await sharp(Buffer.from(svgBanner))
    .png()
    .toFile('./public/og-image.png');
  console.log('og-image.png updated with all partner brands!');
}

createOgImage().catch(console.error);
