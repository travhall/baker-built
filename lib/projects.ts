export interface Phase {
  number: string;
  title: string;
  duration: string;
  body: string;
  tags: string[];
  shotLabel: string;
}

export interface GalleryCell {
  label: string;
  caption: string;
  badge?: string;
  badgeVariant?: 'before' | 'after' | '';
}

export interface Project {
  slug: string;
  sheetNo: string;
  title: string;
  titleHtml: string;
  summary: string;
  summaryHtml: string;
  scope: string;
  location: string;
  duration: string;
  crew: string;
  status: string;
  figCaption: string;
  brief: string[];
  scopeItems: string[];
  buildHeadline: string;
  phases: Phase[];
  beforeAfter: [GalleryCell, GalleryCell];
  details: GalleryCell[];
  outcomeQuote: string;
  outcomeBy: string;
  results: { v: string; u?: string; k: string }[];
  nextSlug: string;
  nextTitle: string;
}

export const projects: Project[] = [
  {
    slug: 'kitchen-remodel',
    sheetNo: 'PRJ‑01',
    title: 'Full Kitchen & Main-Floor Remodel',
    titleHtml: 'Full Kitchen &amp;<br /><em class="em">Main-Floor</em> Remodel',
    summary: 'A dated, closed-off 1920s main floor opened into one bright, working kitchen-and-living space — new layout, new systems, same good bones.',
    summaryHtml: 'A dated, closed-off 1920s main floor opened into one bright, working kitchen-and-living space — <span class="em">new layout, new systems, same good bones.</span>',
    scope: 'Whole-Home Interior',
    location: 'North Minneapolis',
    duration: '≈ 9 Weeks',
    crew: 'Nate + Trades',
    status: 'Complete',
    figCaption: 'Finished kitchen, looking toward the dining wall',
    brief: [
      "The homeowners loved the neighborhood and the character of the house, but the main floor fought them every day — a galley kitchen walled off from the living room, tired cabinets, and wiring that hadn't kept up with the way they actually cook and gather.",
      "The plan was to take down the non-bearing wall between the kitchen and living space, reframe for a flush beam, and rebuild around a single working footprint: a full run of new cabinetry, a center island, updated electrical and plumbing, and durable finishes that match the age of the home without feeling like a museum.",
      "Every stage was planned before demo started, permitted where the city required it, and walked through with the owners at the end of each phase — so there were no surprises and no change orders that weren't talked through first.",
    ],
    scopeItems: [
      'Remove non-bearing wall; reframe with flush beam',
      'New cabinetry, island & pantry millwork',
      'Electrical rough-in & updated panel circuits',
      'Plumbing relocation for sink & dishwasher',
      'Quartz counters & tile backsplash',
      'Refinish main-floor hardwood',
      'New lighting plan — recessed + island pendants',
      'Paint, trim & final punch list',
    ],
    buildHeadline: 'Six phases, start to finish.',
    phases: [
      { number: '01', title: 'Demolition & Protection', duration: 'Phase 01 · Week 1', body: 'Floors and adjacent rooms were masked and protected, then the old cabinets, finishes, and the dividing wall came down. Debris was hauled the same week so the space stayed safe to work in.', tags: ['Site Protection', 'Selective Demo', 'Haul-Off'], shotLabel: 'Demo / gutted space' },
      { number: '02', title: 'Framing & Rough-In', duration: 'Phase 02 · Weeks 2–3', body: 'The flush beam went in to carry the load where the wall used to be. Electrical and plumbing were re-run for the new layout, then inspected and signed off before anything got covered.', tags: ['Flush Beam', 'Electrical', 'Plumbing', 'Inspection'], shotLabel: 'Framing / open walls' },
      { number: '03', title: 'Drywall & Substrate', duration: 'Phase 03 · Weeks 4–5', body: 'Walls and ceiling were hung, taped, and finished smooth, with backing set for cabinets and the range hood. Subfloor was leveled and prepped for the finished surfaces to come.', tags: ['Hang & Tape', 'Backing', 'Floor Prep'], shotLabel: 'Drywall / finished walls' },
      { number: '04', title: 'Cabinetry & Millwork', duration: 'Phase 04 · Weeks 5–6', body: 'Base and upper cabinets, the island, and pantry were set level and scribed to the walls. This is the phase where the new room first starts to read like a kitchen.', tags: ['Set & Scribe', 'Island', 'Pantry'], shotLabel: 'Cabinets going in' },
      { number: '05', title: 'Counters, Tile & Hardwood', duration: 'Phase 05 · Weeks 7–8', body: 'Quartz tops were templated and installed, the backsplash tiled and grouted, and the main-floor hardwood sanded and refinished to tie the new kitchen into the rest of the house.', tags: ['Quartz', 'Backsplash', 'Refinish Floors'], shotLabel: 'Counters + tile detail' },
      { number: '06', title: 'Paint, Trim & Final Walk', duration: 'Phase 06 · Week 9', body: 'Trim, paint, lighting, and hardware were installed, the site cleaned top to bottom, and the whole job walked with the owners against a written punch list before the keys went back.', tags: ['Trim & Paint', 'Lighting', 'Punch List'], shotLabel: 'Finished detail' },
    ],
    beforeAfter: [
      { label: 'Before — original kitchen', caption: 'Original Kitchen', badge: 'Before', badgeVariant: 'before' },
      { label: 'After — finished kitchen',  caption: 'Finished Kitchen', badge: 'After',  badgeVariant: 'after'  },
    ],
    details: [
      { label: 'Island detail',     caption: 'Island',       badge: 'Detail' },
      { label: 'Backsplash detail', caption: 'Backsplash',   badge: 'Detail' },
      { label: 'Living-side view',  caption: 'Open Living',  badge: 'Detail' },
    ],
    outcomeQuote: '"Placeholder for the client\'s own words — what changed about how they use the space, and how the project went. Swap this for a real quote once you\'ve got one."',
    outcomeBy: '— Reserved for the homeowner · North Minneapolis',
    results: [
      { v: '9', u: ' wk', k: 'Start to Finish' },
      { v: '1',           k: 'Wall Removed'     },
      { v: '100', u: '%', k: 'Nate, On Site'    },
      { v: '0',           k: 'Surprise Change Orders' },
    ],
    nextSlug: 'roof-tearoff',
    nextTitle: 'Asphalt Roof Tear-Off',
  },
  {
    slug: 'roof-tearoff',
    sheetNo: 'PRJ‑02',
    title: 'Asphalt Roof Tear-Off & Replacement',
    titleHtml: 'Asphalt Roof<br /><em class="em">Tear-Off</em> &amp; Replacement',
    summary: 'An aging, leak-prone roof stripped to the deck and rebuilt the right way — down to bare wood, back up to a tight, warrantied shingle system.',
    summaryHtml: 'An aging, leak-prone roof stripped to the deck and rebuilt the right way — <span class="em">down to bare wood, back up to a tight, warrantied shingle system.</span>',
    scope: 'Exterior · Roofing',
    location: 'Camden',
    duration: '≈ 3 Days',
    crew: 'Nate + Trades',
    status: 'Complete',
    figCaption: 'Completed roof, street-side elevation',
    brief: [
      "The roof had reached the end of its life — curling shingles, granule loss, and a couple of slow leaks that were starting to show up on the ceilings inside. A patch wasn't going to cut it; the whole field needed to come off so the deck could be checked and rebuilt clean.",
      "Rather than layer over the old shingles, the call was a full tear-off down to the deck — the only way to actually see the condition of the sheathing, replace anything soft, and start the new system on a sound, dry surface.",
      "From there it went back together by the book: ice-and-water shield in the valleys and along the eaves, synthetic underlayment over the field, new flashing, and architectural shingles — all installed to spec so the manufacturer warranty holds and MN winters stay outside where they belong.",
    ],
    scopeItems: [
      'Full tear-off to the roof deck',
      'Deck inspection & sheathing repair',
      'Ice-and-water shield — eaves & valleys',
      'Synthetic underlayment over the field',
      'New step & counter flashing',
      'Architectural shingle installation',
      'Ridge venting & cap',
      'Magnetic nail sweep & full cleanup',
    ],
    buildHeadline: 'Tear-off to ridge, in order.',
    phases: [
      { number: '01', title: 'Setup & Tear-Off', duration: 'Phase 01 · Day 1', body: 'Landscaping and siding were protected and a dumpster staged below the eave. The old shingles, underlayment, and nails were stripped off the full field, right down to the bare deck.', tags: ['Site Protection', 'Strip to Deck', 'Debris Staging'], shotLabel: 'Tear-off in progress' },
      { number: '02', title: 'Deck Inspection & Repair', duration: 'Phase 02 · Day 1', body: 'With the deck exposed, every sheet was checked for rot and soft spots. Damaged sheathing was cut out and replaced, and the whole surface was re-nailed and swept clean before anything went back down.', tags: ['Inspect Deck', 'Replace Sheathing', 'Re-nail'], shotLabel: 'Exposed / repaired deck' },
      { number: '03', title: 'Ice-and-Water & Underlayment', duration: 'Phase 03 · Day 2', body: 'Ice-and-water shield was rolled along the eaves and into every valley — the spots that matter most in a Minnesota thaw — then synthetic underlayment was run across the rest of the field and fastened tight.', tags: ['Eaves & Valleys', 'Synthetic Felt', 'Drip Edge'], shotLabel: 'Underlayment down' },
      { number: '04', title: 'Shingle Installation', duration: 'Phase 04 · Day 2', body: "Starter course along the edges, then architectural shingles up the field — staggered, aligned, and nailed to the manufacturer's spec so the warranty stays intact and the lines stay straight.", tags: ['Starter Course', 'Architectural', 'Spec Nailing'], shotLabel: 'Shingles going up' },
      { number: '05', title: 'Flashing, Vents & Ridge', duration: 'Phase 05 · Day 3', body: 'New step and counter flashing were set at the walls and penetrations, boots fit over the pipes, and ridge vent and cap finished off the top — the details that decide whether a roof actually stays dry.', tags: ['Step Flashing', 'Pipe Boots', 'Ridge Vent'], shotLabel: 'Flashing / ridge detail' },
      { number: '06', title: 'Cleanup & Final Walk', duration: 'Phase 06 · Day 3', body: 'The yard got a full magnetic nail sweep, debris was hauled, and the finished roof was walked and photographed with the owner — left cleaner than we found it.', tags: ['Nail Sweep', 'Haul-Off', 'Final Walk'], shotLabel: 'Finished / cleaned up' },
    ],
    beforeAfter: [
      { label: 'Before — worn roof',   caption: 'Original Roof', badge: 'Before', badgeVariant: 'before' },
      { label: 'After — new shingles', caption: 'New Roof',      badge: 'After',  badgeVariant: 'after'  },
    ],
    details: [
      { label: 'Valley detail',     caption: 'Valley',  badge: 'Detail' },
      { label: 'Ridge vent detail', caption: 'Ridge',   badge: 'Detail' },
      { label: 'Flashing detail',   caption: 'Flashing',badge: 'Detail' },
    ],
    outcomeQuote: '"Placeholder for the client\'s own words — peace of mind through the next storm, how clean the crew left things. Swap this for a real quote once you\'ve got one."',
    outcomeBy: '— Reserved for the homeowner · Camden',
    results: [
      { v: '3', u: ' days', k: 'Start to Finish'   },
      { v: '100', u: '%',   k: 'Stripped to Deck'  },
      { v: '0',             k: 'Leaks Remaining'    },
      { v: 'Mfr.',          k: 'Warranty Intact'    },
    ],
    nextSlug: 'kitchen-remodel',
    nextTitle: 'Full Kitchen & Main-Floor Remodel',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjects(): Project[] {
  return projects;
}
