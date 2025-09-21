import type { ChartData, PlanetPosition, HousePosition, Aspect } from '../types';

/**
 * Validate birth data input
 */
export function validateBirthData(data: {
  name: string;
  birthDate: string;
  birthTime: string;
  birthPlace: string;
  timezone: string;
}): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.name.trim()) {
    errors.push('Name is required');
  }

  if (!data.birthDate) {
    errors.push('Birth date is required');
  }

  if (!data.birthTime) {
    errors.push('Birth time is required');
  }

  if (!data.birthPlace.trim()) {
    errors.push('Birth place is required');
  }

  if (!data.timezone) {
    errors.push('Timezone is required');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * Convert degrees to DMS (Degrees, Minutes, Seconds) format
 */
export function degreesToDMS(degrees: number): string {
  const d = Math.floor(degrees);
  const m = Math.floor((degrees - d) * 60);
  const s = Math.floor(((degrees - d) * 60 - m) * 60);
  
  return `${d}°${m.toString().padStart(2, '0')}'${s.toString().padStart(2, '0')}"`;
}

/**
 * Get zodiac sign from degree
 */
export function getZodiacSign(degree: number): string {
  const signs = [
    'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
    'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
  ];
  
  const signIndex = Math.floor(degree / 30);
  return signs[signIndex] || 'Unknown';
}

/**
 * Calculate aspect between two planets
 */
export function calculateAspect(degree1: number, degree2: number): {
  aspectType: string;
  orb: number;
  isExact: boolean;
} {
  const diff = Math.abs(degree1 - degree2);
  const angle = diff > 180 ? 360 - diff : diff;
  
  const aspects = [
    { name: 'Conjunction', degree: 0, orb: 8 },
    { name: 'Sextile', degree: 60, orb: 6 },
    { name: 'Square', degree: 90, orb: 8 },
    { name: 'Trine', degree: 120, orb: 8 },
    { name: 'Opposition', degree: 180, orb: 8 }
  ];
  
  for (const aspect of aspects) {
    const orb = Math.abs(angle - aspect.degree);
    if (orb <= aspect.orb) {
      return {
        aspectType: aspect.name,
        orb: orb,
        isExact: orb <= 1
      };
    }
  }
  
  return {
    aspectType: 'None',
    orb: 0,
    isExact: false
  };
}

/**
 * Generate sample chart data (placeholder for real calculations)
 */
export function generateSampleChart(data: {
  name: string;
  birthDate: string;
  birthTime: string;
  birthPlace: string;
  timezone: string;
}): ChartData {
  // This is a simplified placeholder. In a real app, you'd use 
  // astronomical libraries like Swiss Ephemeris or similar
  
  const samplePlanets: PlanetPosition[] = [
    { planet: 'Sun', sign: 'Gemini', degree: 23.45, house: 10, isRetrograde: false },
    { planet: 'Moon', sign: 'Cancer', degree: 15.23, house: 11, isRetrograde: false },
    { planet: 'Mercury', sign: 'Gemini', degree: 18.67, house: 10, isRetrograde: false },
    { planet: 'Venus', sign: 'Taurus', degree: 7.89, house: 9, isRetrograde: false },
    { planet: 'Mars', sign: 'Leo', degree: 12.34, house: 12, isRetrograde: false },
    { planet: 'Jupiter', sign: 'Sagittarius', degree: 28.91, house: 4, isRetrograde: true },
    { planet: 'Saturn', sign: 'Capricorn', degree: 5.67, house: 5, isRetrograde: false },
    { planet: 'Uranus', sign: 'Aquarius', degree: 14.23, house: 6, isRetrograde: false },
    { planet: 'Neptune', sign: 'Pisces', degree: 21.45, house: 7, isRetrograde: true },
    { planet: 'Pluto', sign: 'Scorpio', degree: 9.87, house: 3, isRetrograde: false }
  ];
  
  const sampleHouses: HousePosition[] = Array.from({ length: 12 }, (_, i) => ({
    house: i + 1,
    sign: getZodiacSign((i * 30 + Math.random() * 30) % 360),
    degree: Math.random() * 30
  }));
  
  const sampleAspects: Aspect[] = [
    { planet1: 'Sun', planet2: 'Moon', type: 'Trine', orb: 3.2, isExact: false },
    { planet1: 'Venus', planet2: 'Mars', type: 'Conjunction', orb: 0.8, isExact: true },
    { planet1: 'Mercury', planet2: 'Jupiter', type: 'Square', orb: 2.1, isExact: false }
  ];
  
  return {
    id: `chart-${Date.now()}`,
    name: data.name,
    birthDate: new Date(data.birthDate),
    birthTime: data.birthTime,
    birthPlace: {
      city: data.birthPlace.split(',')[0]?.trim() || '',
      state: data.birthPlace.split(',')[1]?.trim(),
      country: data.birthPlace.split(',')[2]?.trim() || '',
      latitude: 40.7128, // Default to NYC coordinates
      longitude: -74.0060,
      timezone: data.timezone
    },
    planets: samplePlanets,
    houses: sampleHouses,
    aspects: sampleAspects
  };
}

/**
 * Format planet display name with symbol
 */
export function formatPlanetName(planet: string): string {
  const symbols: Record<string, string> = {
    'Sun': '☉',
    'Moon': '☽',
    'Mercury': '☿',
    'Venus': '♀',
    'Mars': '♂',
    'Jupiter': '♃',
    'Saturn': '♄',
    'Uranus': '♅',
    'Neptune': '♆',
    'Pluto': '♇'
  };
  
  return `${symbols[planet] || ''} ${planet}`;
}