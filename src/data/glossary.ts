import type { GlossaryEntry, GlossaryCategory } from '../types';

export const glossaryCategories: GlossaryCategory[] = [
  {
    id: 'planets',
    name: 'Planets',
    description: 'The celestial bodies and their astrological meanings',
    color: 'bg-blue-500'
  },
  {
    id: 'signs',
    name: 'Zodiac Signs',
    description: 'The twelve astrological signs and their characteristics',
    color: 'bg-purple-500'
  },
  {
    id: 'houses',
    name: 'Houses',
    description: 'The twelve astrological houses and life areas',
    color: 'bg-green-500'
  },
  {
    id: 'aspects',
    name: 'Aspects',
    description: 'Angular relationships between planets',
    color: 'bg-red-500'
  },
  {
    id: 'techniques',
    name: 'Techniques',
    description: 'Astrological methods and practices',
    color: 'bg-yellow-500'
  }
];

export const glossaryEntries: GlossaryEntry[] = [
  {
    id: 'sun',
    term: 'Sun',
    definition: 'The central star of our solar system, representing the core self, ego, vitality, and life force in astrology. The Sun sign is determined by the zodiac sign the Sun was in at the time of birth.',
    category: 'planets',
    relatedTerms: ['solar-return', 'ego', 'vitality'],
    etymology: 'From Old English "sunne", related to Latin "sol"',
    examples: [
      'A Leo Sun person tends to be confident and dramatic',
      'The Sun represents the father figure in traditional astrology'
    ],
    tags: ['core-self', 'identity', 'vitality', 'masculine']
  },
  {
    id: 'moon',
    term: 'Moon',
    definition: 'Earth\'s natural satellite, representing emotions, intuition, the subconscious mind, and nurturing qualities in astrology. The Moon sign reflects one\'s emotional nature and inner world.',
    category: 'planets',
    relatedTerms: ['emotions', 'intuition', 'cycles'],
    etymology: 'From Old English "mōna", related to Proto-Germanic "mēnô"',
    examples: [
      'A Cancer Moon person is deeply emotional and nurturing',
      'The Moon governs the tides and emotional cycles'
    ],
    tags: ['emotions', 'intuition', 'feminine', 'cycles']
  },
  {
    id: 'aries',
    term: 'Aries',
    definition: 'The first sign of the zodiac, ruled by Mars. Aries is a cardinal fire sign known for leadership, initiative, courage, and pioneering spirit. Those born under this sign are often energetic and competitive.',
    category: 'signs',
    relatedTerms: ['mars', 'cardinal', 'fire-element'],
    etymology: 'From Latin "ariēs" meaning ram',
    examples: [
      'Aries season begins at the spring equinox',
      'An Aries rising person appears confident and assertive'
    ],
    tags: ['leadership', 'initiative', 'fire', 'cardinal', 'mars-ruled']
  },
  {
    id: 'first-house',
    term: 'First House',
    definition: 'The first of the twelve astrological houses, representing the self, identity, appearance, and first impressions. Also known as the Ascendant or Rising sign, it shows how others perceive you.',
    category: 'houses',
    relatedTerms: ['ascendant', 'rising-sign', 'identity'],
    etymology: 'From the concept of the "house of self" in traditional astrology',
    examples: [
      'The first house cusp is your rising sign',
      'Planets in the first house strongly influence your personality'
    ],
    tags: ['identity', 'appearance', 'first-impressions', 'ascendant']
  },
  {
    id: 'conjunction',
    term: 'Conjunction',
    definition: 'An aspect formed when two planets are within 0-8 degrees of each other, creating a powerful blending of their energies. Conjunctions represent unity, new beginnings, and concentrated power.',
    category: 'aspects',
    relatedTerms: ['aspects', 'orb', 'planetary-energy'],
    etymology: 'From Latin "conjunctio" meaning joining together',
    examples: [
      'A Sun-Moon conjunction creates a New Moon',
      'Mars conjunct Venus blends passion with love'
    ],
    tags: ['unity', 'power', 'blending', 'new-beginnings']
  },
  {
    id: 'natal-chart',
    term: 'Natal Chart',
    definition: 'A map of the heavens at the exact moment of birth, showing the positions of planets, signs, and houses. Also called a birth chart, it serves as the foundation for astrological interpretation.',
    category: 'techniques',
    relatedTerms: ['birth-chart', 'horoscope', 'planetary-positions'],
    etymology: 'From Latin "natalis" meaning of birth',
    examples: [
      'Your natal chart is calculated using birth date, time, and location',
      'The natal chart shows your cosmic blueprint'
    ],
    tags: ['birth', 'foundation', 'interpretation', 'blueprint']
  }
];

export function getEntriesByCategory(categoryId: string): GlossaryEntry[] {
  return glossaryEntries.filter(entry => entry.category === categoryId);
}

export function searchEntries(query: string): GlossaryEntry[] {
  const lowercaseQuery = query.toLowerCase();
  return glossaryEntries.filter(entry => 
    entry.term.toLowerCase().includes(lowercaseQuery) ||
    entry.definition.toLowerCase().includes(lowercaseQuery) ||
    entry.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
}

export function getEntryById(id: string): GlossaryEntry | undefined {
  return glossaryEntries.find(entry => entry.id === id);
}

export function getRelatedEntries(entryId: string): GlossaryEntry[] {
  const entry = getEntryById(entryId);
  if (!entry?.relatedTerms) return [];
  
  return entry.relatedTerms
    .map(termId => getEntryById(termId))
    .filter((entry): entry is GlossaryEntry => entry !== undefined);
}