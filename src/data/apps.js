// The four apps. Everything the page says about them lives here.
//
// `fallbackVersion` is only used when the GitHub releases API can't be reached
// at build time — the real version comes from the API (see src/lib/releases.js).
// `hasReleases: false` means the repo has no published release yet, so the card
// links to source instead of a download.
// `shot` is an imported image, so Astro resizes it and converts it to WebP at
// build time; `shot: null` leaves that app out of the figure row.
// `licence` is the tool's actual licence, which is not the same across the
// four: NED-Net and GliaAnalysis are GPL-3.0, TRACER and ASTERISM are PolyForm
// Noncommercial. `licence: null` would say plainly that a tool has no licence
// file, rather than implying terms that do not exist.

import tracerShot from '../assets/shots/tracer.png';
import nednetShot from '../assets/shots/nednet.png';
import gliaShot from '../assets/shots/glia.png';
import asterismShot from '../assets/shots/asterism.png';

export const ORG = 'EpilepsyCenter';

export const apps = [
  {
    id: 'tracer',
    name: 'TRACER',
    kind: 'Electrophysiology',
    repo: 'tracer',
    colour: 'var(--tracer)',
    mark: '/marks/tracer.svg',
    spark: 'ap',
    hasReleases: true,
    fallbackVersion: 'v1.0.1',
    licence: 'PolyForm Noncommercial 1.0.0',
    website: 'https://epilepsycenter.github.io/tracer/',
    blurb:
      'Patch-clamp and field-recording analysis. Opens HEKA and Axon files directly, runs the analyses you actually use, and exports publication figures.',
    chips: ['Events', 'Kinetics', 'I–V', 'Action potentials', 'Cohort stats'],
    shot: tracerShot,
    shotCaption: 'TRACER — burst detection on a field recording',
  },
  {
    id: 'nednet',
    name: 'NED-Net',
    kind: 'Long-term EEG',
    repo: 'NED-Net',
    colour: 'var(--nednet)',
    mark: '/marks/nednet.png',
    spark: 'eeg',
    hasReleases: true,
    fallbackVersion: 'v2.0.0',
    licence: 'GPL-3.0',
    website: 'https://epilepsycenter.github.io/NED-Net/',
    blurb:
      'Seizure and interictal spike detection in long-term rodent EEG. Rule-based detectors and a trained U-Net, with review, retraining, and per-project statistics.',
    chips: ['EDF', 'U-Net', 'Review', 'Batch', 'Group statistics'],
    shot: nednetShot,
    shotCaption: 'NED-Net — reviewing detected seizures as training data',
  },
  {
    id: 'glia',
    name: 'GliaAnalysis',
    kind: 'Imaging',
    repo: 'GliaAnalysis',
    colour: 'var(--glia)',
    mark: '/marks/glia.svg',
    spark: 'sholl',
    hasReleases: true,
    fallbackVersion: 'v1.0.0',
    licence: 'GPL-3.0',
    website: null,
    blurb:
      'Microglia morphology and astrocyte network analysis. FIJI does the segmentation, Python does the features, clustering and inflammation scoring — no R required.',
    chips: ['36 features', 'Clustering', 'Inflammation index', 'GFAP'],
    shot: gliaShot,
    shotCaption: 'GliaAnalysis — PCA and clustering of microglia morphology',
  },
  {
    id: 'asterism',
    name: 'ASTERISM',
    kind: 'Statistics · figures',
    repo: 'asterism',
    colour: 'var(--asterism)',
    mark: '/marks/asterism.svg',
    spark: 'bars',
    hasReleases: true,
    fallbackVersion: 'v0.1.1',
    licence: 'PolyForm Noncommercial 1.0.0',
    website: 'https://epilepsycenter.github.io/asterism/',
    blurb:
      'Statistics and graphing for the bench. Takes the exports from the three tools above, keeps track of which animal each number came from, and makes the figure.',
    chips: ['ANOVA', 'Repeated measures', 'Vector export', 'Figure sets'],
    shot: asterismShot,
    shotCaption: 'ASTERISM — SuperPlot with a nested t test',
  },
];
