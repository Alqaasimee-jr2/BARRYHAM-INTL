import fs from 'fs';

// IMAGE MAPPINGS — keyed by product ID as it will appear in the parsed output
// We use simplified/stripped IDs for matching
const imageMappings = {
  // GROHE
  "39706000":          "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/a8aff353-7b8d-508e-b0b4-ebb6ef705ba1/56fcb09c-8621-533b-9c38-ecb23cde8ef9.jpg",
  "26693001":          "https://st.perplexity.ai/estatic/0b226c450798410ac541646c86ec31afd840e5beab817a5d84fa821e7db61981ec84c3b4a3f072a7a2e1899c9fb06c6ee45823b4ba7c8b3ad8c7a11b57af4607803bb648a289287985e820e48a68696ed9d6aa80675793971044a945d0ea9f4ef3038d9f675982ba9722f3e0343aaa61",
  "32950000":          "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/a73f8f8b-ebc8-5432-82fe-fb0beeeab2b9/7ab05a72-1433-5de3-be0c-71e20c27574a.jpg",
  "40778001":          "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/1f898b9a-6109-5da1-b5bb-8d01a1b178d2/b5a0c0a9-0bb6-54bd-bd56-b7f12ecc08ec.jpg",
  "23965003":          "https://st.perplexity.ai/estatic/0b226c450798410ac541646c86ec31afd840e5beab817a5d84fa821e7db61981ec84c3b4a3f072a7a2e1899c9fb06c6efb638d265c1c3f15666f0255aa1bcf0a01d56be189a0d6b50b8271c35157cdf3f8306da24e225a290a6d4f96a2a79f81ce86a0fdf2c9309a84cbb20e999b1704",

  // IDEAL STANDARD
  "G048101":           "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/3360285c-eea7-5176-a655-5a7146731523/d9d02db5-1003-5eae-bf0d-cec2fbc6998a.jpg",
  "T350201":           "https://st.perplexity.ai/estatic/0b226c450798410ac541646c86ec31afd840e5beab817a5d84fa821e7db61981ec84c3b4a3f072a7a2e1899c9fb06c6ec1ca0136d5cfb03ef7396bce5c4f8af1ffb98476a99225936d57e1e34ff9a11fa9ea8b02fdbb213d4c41bbae266cbe838147be089a10bca80ef41940c6d00eb7",
  "BC947AA":           "https://st.perplexity.ai/estatic/0b226c450798410ac541646c86ec31afd840e5beab817a5d84fa821e7db61981ec84c3b4a3f072a7a2e1899c9fb06c6e03759f7c2339fa906faec9f8a88edb474b6f304ebe2801c4629b28001fcc6fc0a837d3e4469e4419d816c8b5ea512e7fa64865d93fec200edd120c908938d9f2",
  "G812801":           "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/5749ed70-2d3e-5816-ab19-93c5bfb93a4e/db21994d-20e3-54de-b3ec-f6eb3f1d7e59.jpg",

  // VARMORA
  "V10022":            "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/96f623ab-3677-5621-82b7-5e91e661c0da/f3587212-e850-5068-8b39-1aaf35deeb1c.jpg",
  "V9025":             "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/5eeb6902-c7d3-53c7-a57e-84fb05f9353c/f3587212-e850-5068-8b39-1aaf35deeb1c.jpg",
  "V6024":             "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/7bdd45da-bc37-57ab-b755-5ca2e7a5e7e2/f3587212-e850-5068-8b39-1aaf35deeb1c.jpg",
  "V2501":             "https://st.perplexity.ai/estatic/0b226c450798410ac541646c86ec31afd840e5beab817a5d84fa821e7db61981ec84c3b4a3f072a7a2e1899c9fb06c6edefe6bcf1541be7a69ee2010c72df5048346bc3095dd1628d29e8e09aca869a5dd425c71e15d7e7cd2ac932a63a3d2c4403bb73d8dbe14d173fdde7e6e142533",

  // VILLEROY & BOCH
  "5656R001":          "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/81544f73-949a-5f1b-b47e-8e097468fe47/783057cd-a228-5390-9cd6-f89c46490747.jpg",
  "4611R001":          "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/b698802e-f299-5ea6-8784-f7429533b8a1/06cb45b3-3ac3-5ba1-9431-e118af0e9e85.jpg",
  "TVW10300500061":    "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/5a672450-935a-50d7-a18f-d42e57fb54d9/44ab55c7-5903-501f-89b3-73197252015c.jpg",
  "TVS00040100000":    "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/980ecc25-4cb6-5be2-b654-ca93a5e0b763/907dbe5e-e4ba-59af-8d4e-74ce777fa3b6.jpg",

  // SANIT
  "95721000000":       "https://st.perplexity.ai/estatic/0b226c450798410ac541646c86ec31afd840e5beab817a5d84fa821e7db61981ec84c3b4a3f072a7a2e1899c9fb06c6e76e2b849d16101cae2572013b51e3689f135eeeb76d6b3a20472e4f8e1014f95097d4792ce65c8875c15057fe8e1d7afa05b73dd0841e2291ebb9a5440f7d9c0",
  "25001000000":       "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/adbcca6c-92a7-5e2e-9528-1a8a839a9c0a/e45f8ae9-ad80-53fe-8b14-f8aef3ddfa74.jpg",
  "16706810000":       "https://st.perplexity.ai/estatic/0b226c450798410ac541646c86ec31afd840e5beab817a5d84fa821e7db61981ec84c3b4a3f072a7a2e1899c9fb06c6e160b17e4af83ee88381f120151a6bdcdb91af73caafbfdb7cde58f61ccb0ac1f577b5902f5c54087f93bec64246e4fc7f663f8bb4af800f53df3220c3ffc4dc1",
  "0398200000":        "https://st.perplexity.ai/estatic/0b226c450798410ac541646c86ec31afd840e5beab817a5d84fa821e7db61981ec84c3b4a3f072a7a2e1899c9fb06c6e5867bb710e83fed77e6366d5c71c302ca03659cebbe15eeb70a549082516f6630ccd1eb493012bc8e52baca2aed4d39a",

  // JIMTEN
  "113426":            "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/b87832df-add9-50f5-83c6-31f6fb7e8a91/853d93d2-9caa-524f-8dd7-292287abe72b.jpg",
  "113427":            "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/b87832df-add9-50f5-83c6-31f6fb7e8a91/853d93d2-9caa-524f-8dd7-292287abe72b.jpg",
  "013429":            "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/e63bc4d5-0036-55ca-a764-74449ea0a5d5/f0c6c11b-7ed7-5a2d-9756-9b3ce15da011.jpg",
};

function getImageUrl(id) {
  // Strip id to alphanumeric only for fuzzy lookup
  const stripped = id.replace(/[^A-Za-z0-9]/g, '');
  
  // Direct match first
  if (imageMappings[id]) return imageMappings[id];
  
  // Then try to match if the id STARTS WITH or CONTAINS a key
  for (const [key, url] of Object.entries(imageMappings)) {
    const strippedKey = key.replace(/[^A-Za-z0-9]/g, '');
    if (stripped.startsWith(strippedKey) || strippedKey === stripped) {
      return url;
    }
  }
  return null;
}

const rawText = fs.readFileSync('pdf_text.txt', 'utf8');
const lines = rawText.split('\n').map(l => l.trim()).filter(Boolean);

const products = [];
let currentBrand = 'Grohe';

// Known price entries — each product row ends with a price like "247,875.00"
// We accumulate lines into buffer and flush when a price is detected
const priceRegex = / ([\d,]+\.\d{2})\s*$/;

let buffer = '';

function flush(buf) {
  const priceMatch = buf.match(priceRegex);
  if (!priceMatch) return;

  const priceStr = priceMatch[1].replace(/,/g, '');
  const price = parseFloat(priceStr);
  
  // Remove price from end
  let rem = buf.replace(priceRegex, '').trim();
  
  // Remove leading serial number (1-3 digits at start)
  rem = rem.replace(/^\d{1,3}\s+/, '');
  
  // Remove quantity (standalone number before end)
  rem = rem.replace(/\s+\d{1,4}\s*$/, '');
  
  // Try to extract item code: first "word" that looks like a product code
  // Product codes: alphanumeric+symbols, no spaces, followed by space then description
  const codeMatch = rem.match(/^([A-Z0-9][A-Za-z0-9\-\.\+\/\']{3,})\s+(.+)$/);
  
  let id, name;
  if (codeMatch) {
    id = codeMatch[1];
    name = codeMatch[2].trim();
  } else {
    id = 'UNKNOWN-' + products.length;
    name = rem.trim();
  }

  // Determine category
  const lower = name.toLowerCase();
  const isPlumbing = /valve|trap|mixer|tap|spout|shower|drain|hose|fill|flush|cable|pipe|mechanism|flush plate|concealed tank|concealed mechanism|bib/.test(lower);
  const category = isPlumbing ? 'plumbing' : 'sanitary';

  // Fix brand name from name string
  let brand = currentBrand;
  if (/grohe/i.test(name)) brand = 'Grohe';
  else if (/ideal standard/i.test(name)) brand = 'Ideal Standard';
  else if (/varmora/i.test(name)) brand = 'Varmora';
  else if (/villeroy|boch/i.test(name)) brand = 'Villeroy & Boch';
  else if (/sanit/i.test(name)) brand = 'Sanit';
  else if (/jimten/i.test(name)) brand = 'Jimten';
  else if (/vink/i.test(name)) brand = 'Vink';

  const imageUrl = getImageUrl(id);
  const placeholderImage = category === 'sanitary' ? '/images/placeholder-sanitary.jpg' : '/images/placeholder-plumbing.jpg';

  products.push({
    id,
    name,
    category,
    brand,
    price,
    image: imageUrl || placeholderImage,
  });
}

for (const line of lines) {
  if (/\(Available\)/.test(line)) {
    if (buffer) flush(buffer);
    buffer = '';
    currentBrand = line.replace(/\(Available\)/i, '').trim();
    continue;
  }
  
  // Does line end with a price? Flush current buffer first if non-empty, then start fresh
  if (priceRegex.test(line)) {
    // Sometimes price is at the end of the current line only
    // Append to buffer first
    buffer += (buffer ? ' ' : '') + line;
    flush(buffer);
    buffer = '';
  } else {
    buffer += (buffer ? ' ' : '') + line;
  }
}
// Final flush
if (buffer) flush(buffer);

const tsOutput = `export type ProductCategory = "sanitary" | "cables-lighting" | "plumbing";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  brand: string;
  price: number;
  image: string;
  description?: string;
}

export const products: Product[] = [
${products.map(p => `  {
    id: ${JSON.stringify(p.id)},
    name: ${JSON.stringify(p.name)},
    category: ${JSON.stringify(p.category)},
    brand: ${JSON.stringify(p.brand)},
    price: ${p.price},
    image: ${JSON.stringify(p.image)},
  }`).join(',\n')}
];
`;

fs.writeFileSync('data/products.ts', tsOutput);

const withImages = products.filter(p => !p.image.includes('/images/placeholder')).length;
console.log(`\n✓ Parsed ${products.length} products`);
console.log(`✓ ${withImages} products have real image URLs`);
console.log(`✓ ${products.length - withImages} products use placeholders`);
