import fs from 'fs';

let content = fs.readFileSync('data/products.ts', 'utf8');

// ─── BATCH: Apply image URLs ───────────────────────────────────────────────
const mappings = [
  // IDEAL STANDARD
  { id: "K310101",         url: "https://st.perplexity.ai/estatic/0b226c450798410ac541646c86ec31afd840e5beab817a5d84fa821e7db61981ec84c3b4a3f072a7a2e1899c9fb06c6e1c367a6f45a7554e31120651c8186e382f3c0e6b71e3c09917bbec02566bb734728d5f2cc2336233a86519952f426f0dd712bd8162918a6de60d06b725efdd46" },
  { id: "G350501",         url: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/1865c43a-4f49-549a-b23d-7999b172b72a/6aa0a37c-cae2-592b-a4b7-93506667a94d.jpg" },
  { id: "E785001",         url: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/40cf05d8-cfbc-5551-b38c-fd496f955303/70eb9f6f-8882-5acb-ae48-283a91b2fc10.jpg" },
  { id: "E803601",         url: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/4edb0755-4649-5267-8cbe-7f5ff3a5e68f/ab68f958-f615-5a80-a5b2-0bcac5c91099.jpg" },
  { id: "J501901",         url: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/da4d5cd2-14a6-5bca-b82c-dddd90173b28/6aa0a37c-cae2-592b-a4b7-93506667a94d.jpg" },
  { id: "J501701",         url: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/f65df4dd-21d7-5d3b-a586-409c5ff98d6c/6aa0a37c-cae2-592b-a4b7-93506667a94d.jpg" },
  { id: "G065601",         url: "https://st.perplexity.ai/estatic/0b226c450798410ac541646c86ec31afd840e5beab817a5d84fa821e7db61981ec84c3b4a3f072a7a2e1899c9fb06c6e64361928dcc11a52d9e97d7e0dd64ca4729ba79dbc8b60112d73be1844a7b314227fc9d4dff5c1a1c0b7eb05b31cc585d1bdf751dd27297b1bff2ca955f27153" },
  { id: "G351001",         url: "https://st.perplexity.ai/estatic/0b226c450798410ac541646c86ec31afd840e5beab817a5d84fa821e7db61981ec84c3b4a3f072a7a2e1899c9fb06c6eb250b634cc587b90553f26624e57a8b411d28dee8856253aea3f50ed084bc3c32454ba127a2693ca3defd4a30c95d3b362df5d04bb070a1aa0ccb220e7dc4997" },
  { id: "BC950AA",         url: "https://st.perplexity.ai/estatic/0b226c450798410ac541646c86ec31afd840e5beab817a5d84fa821e7db61981ec84c3b4a3f072a7a2e1899c9fb06c6e241e70ee7770d15c2848b29667b63ee123d55ef3456c1383b87e6254aead94f2e54c243b00b8f24c57bdfb735b06acc95d0401058b55fe9656320417587007fc" },
  { id: "R014667",         url: "https://st.perplexity.ai/estatic/0b226c450798410ac541646c86ec31afd840e5beab817a5d84fa821e7db61981ec84c3b4a3f072a7a2e1899c9fb06c6ee09019f8d2819297d353dd436920a573301966cf278526a8eb36f1499b85de953c8c63735f43c970eeaee47d222df2e916725775359c4051d6517486c07e6a76" },

  // VARMORA
  { id: "V10024",          url: "https://st.perplexity.ai/estatic/0b226c450798410ac541646c86ec31afd840e5beab817a5d84fa821e7db61981ec84c3b4a3f072a7a2e1899c9fb06c6e2414936b0beaf5d0bf1609e34ebc05f56ce42c3ec601beead70d9c1535a37052b6bd4d0030355ea575c78304abd05bfa9368f728d1e9355435cd9ecad4d3ee19" },
  { id: "V10012",          url: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/c576f70e-aa3d-5016-bd32-e5e76ca7212c/f3587212-e850-5068-8b39-1aaf35deeb1c.jpg" },
  { id: "V9018",           url: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/3e04675e-246c-5e79-bd9f-932acb771cc6/f3587212-e850-5068-8b39-1aaf35deeb1c.jpg" },
  { id: "V9005",           url: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/8c538ff6-51c5-51df-a18a-80267ceb3f85/f3587212-e850-5068-8b39-1aaf35deeb1c.jpg" },
  { id: "V9001",           url: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/6da2ce66-c705-58d6-9cb1-f95d98d9ce65/f3587212-e850-5068-8b39-1aaf35deeb1c.jpg" },
  { id: "V1532",           url: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/eb15573f-9849-5191-8d2b-735b654fe7d1/f3587212-e850-5068-8b39-1aaf35deeb1c.jpg" },
  { id: "V2509",           url: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/51ddac14-a6d1-5706-94c0-af08d7d7128a/f3587212-e850-5068-8b39-1aaf35deeb1c.jpg" },
  { id: "V2513",           url: "https://st.perplexity.ai/estatic/0b226c450798410ac541646c86ec31afd840e5beab817a5d84fa821e7db61981ec84c3b4a3f072a7a2e1899c9fb06c6e2ad7643d21fbe6c2a72491e501aea1f139cfed149db61409b632e909d0e09a80daeb873d429c99a8470eee3db400ae80bbda152f4164f8b6c701188c02993f91" },

  // VILLEROY & BOCH — WCs
  { id: "4670T001",        url: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/83de3c90-5042-5706-8bf0-70733671b815/5df0ff64-b8b1-53ed-b8b2-7d344db417fa.jpg" },
  { id: "5684R001",        url: "https://st.perplexity.ai/estatic/0b226c450798410ac541646c86ec31afd840e5beab817a5d84fa821e7db61981ec84c3b4a3f072a7a2e1899c9fb06c6e8dd47f4521b189e9a351fd16550eb0f163f4e1a687fdecea4df478c968997827e419d8d1f06d46eee755e16e8aeaac883e399235e08a97e217f06e52782ca3fe" },
  { id: "4625R001",        url: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/e75907af-f157-5854-8779-01af47f5c30f/70eb9f6f-8882-5acb-ae48-283a91b2fc10.jpg" },
  { id: "4636F701",        url: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/b0f53a3f-7bd3-5b51-8f83-2a6725387c62/2614704a-b2b1-591e-b82b-ec628665a8e6.jpg" },

  // VILLEROY & BOCH — Basins
  { id: "4A415001",        url: "https://st.perplexity.ai/estatic/0b226c450798410ac541646c86ec31afd840e5beab817a5d84fa821e7db61981ec84c3b4a3f072a7a2e1899c9fb06c6ec3aaacdbc91342d601884137d7f6a9641cf93526cead759114ca5118389a4b0d12922896410324e033ad68bc0bc382d650ef0791797014ceef40415396485a0f" },
  { id: "411355R1",        url: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/091f2108-0028-5587-8e48-0e5825016eb6/783057cd-a228-5390-9cd6-f89c46490747.jpg" },
  { id: "41686LR1",        url: "https://st.perplexity.ai/estatic/0b226c450798410ac541646c86ec31afd840e5beab817a5d84fa821e7db61981ec84c3b4a3f072a7a2e1899c9fb06c6eaa951b3f4005d5c38554a33d924391d5febd938cb72d4b4417d0bc503e7334986e5c16b1856fbb682f59467ddbe0dacdb9fc1107f4f6982aefea70919df91251" },
  { id: "5A254501",        url: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/79663b32-000a-506d-bcb7-876d39f4a9b3/39203bb2-ca18-5a2b-b77f-766584c443cd.jpg" },
  { id: "4A415501",        url: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/7fa00901-dadb-5ee4-b7ad-f03188b8dc24/ea81bb67-a2c9-5c16-b4f8-8c1cccb6fb5c.jpg" },
  { id: "513360R2",        url: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/4e65cb88-aafd-540a-a62c-348a265cec94/8da4ce3e-bfa8-553c-9572-366603d74a36.jpg" },
  { id: "4A560001",        url: "https://st.perplexity.ai/estatic/0b226c450798410ac541646c86ec31afd840e5beab817a5d84fa821e7db61981ec84c3b4a3f072a7a2e1899c9fb06c6e444bf81ec10731e2f1d711e6f32394d439421b7869aa776de6602ed56f4598e2fbce4d173a4c6a27873f5d3160f22452b4281a5b76e0f11f70f477c344aab853" },
  { id: "VB-51756001",     url: "https://st.perplexity.ai/estatic/0b226c450798410ac541646c86ec31afd840e5beab817a5d84fa821e7db61981ec84c3b4a3f072a7a2e1899c9fb06c6e8de4cc50e74191f55ed1fcb557972ef1e8090c0b9cb19f16dda20bb33f1ebcd3135beaf51eb73a2f1ccc91623218dab7ff43926997c4823dba870eb9b58549a3" },
];

let updatedCount = 0;
let failedIds = [];

for (const { id, url } of mappings) {
  const escapedId = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(
    `(id: "${escapedId}"[\\s\\S]{0,500}?image: )"[^"]*"`,
    'g'
  );
  const before = content;
  content = content.replace(pattern, `$1"${url}"`);
  if (content !== before) {
    updatedCount++;
    console.log(`  ✓ ${id}`);
  } else {
    failedIds.push(id);
    console.log(`  ✗ NO MATCH: ${id}`);
  }
}

// Write after images applied
fs.writeFileSync('data/products.ts', content);
console.log(`\n✓ Images applied: ${updatedCount}/${mappings.length}`);
if (failedIds.length > 0) console.log(`✗ Failed: ${failedIds.join(', ')}`);

// ─── STRIP placeholder products ────────────────────────────────────────────
// Re-read fresh content
content = fs.readFileSync('data/products.ts', 'utf8');

// Extract header (everything before the array)
const arrayStart = content.indexOf('export const products: Product[] = [');
const header = content.substring(0, arrayStart);

// Extract the array body
const arrayOpenIdx = content.indexOf('[', arrayStart);
const arrayCloseIdx = content.lastIndexOf(']');
const arrayBody = content.substring(arrayOpenIdx + 1, arrayCloseIdx);

// Split into individual product blocks by splitting on },\n  {
const blocks = arrayBody.split(/,\n  \{/).map((b, i) => {
  // Re-add the opening brace that was stripped by split (except for the first block)
  return i === 0 ? b.trim() : '{' + b;
});

const kept = [];
const removed = [];

for (const block of blocks) {
  if (block.includes('placeholder')) {
    // Extract name for logging
    const nameMatch = block.match(/name: "([^"]+)"/);
    removed.push(nameMatch ? nameMatch[1] : 'UNKNOWN');
  } else {
    kept.push(block.trim());
  }
}

const newContent = header +
  `export const products: Product[] = [\n  ` +
  kept.join(',\n  ') +
  `\n];\n`;

fs.writeFileSync('data/products.ts', newContent);

console.log(`\n✓ Kept: ${kept.length} products with real images`);
console.log(`✗ Removed: ${removed.length} placeholder products`);
console.log(`\nRemoved products:`);
removed.forEach((name, i) => console.log(`  ${i + 1}. ${name}`));
