export interface CatMeta {
  label: string;
  title: string;
  description: string;
}

/** Categorie-archieven, met de slugs en titels van de WordPress-bron. */
export const CATS: Record<string, CatMeta> = {
  bedrijven: { label: 'Bedrijven', title: 'Bedrijven Archieven - Digitalnomad.nl', description: 'Artikelen over ondernemen en bedrijven voor digital nomads.' },
  blog: { label: 'Blog', title: 'Blog Archieven - Digitalnomad.nl', description: 'Alle blogartikelen van Digitalnomad.nl.' },
  crypto: { label: 'Crypto', title: 'Crypto Archieven - Digitalnomad.nl', description: 'Alles over cryptocurrency, beleggen en verdienen als digital nomad.' },
  marketing: { label: 'Marketing', title: 'marketing Archieven - Digitalnomad.nl', description: 'Marketingtips voor digital nomads en online ondernemers.' },
  nieuws: { label: 'Nieuws', title: 'Nieuws Archieven - Digitalnomad.nl', description: 'Het laatste nieuws voor digital nomads.' },
  reizen: { label: 'Reizen', title: 'Reizen Archieven - Digitalnomad.nl', description: 'Reisverhalen, bestemmingen en praktische reistips.' },
  spotify: { label: 'Spotify', title: 'Spotify Archieven - Digitalnomad.nl', description: 'Artikelen over Spotify.' },
  tiktok: { label: 'TikTok', title: 'TikTok Archieven - Digitalnomad.nl', description: 'Artikelen over TikTok.' },
  uncategorized: { label: 'Overig', title: 'Uncategorized Archieven - Digitalnomad.nl', description: 'Overige artikelen van Digitalnomad.nl.' },
  vervoer: { label: 'Vervoer', title: 'vervoer Archieven - Digitalnomad.nl', description: 'Artikelen over vervoer en onderweg zijn.' },
};
