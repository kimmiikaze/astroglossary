import type { GlossaryEntry, SearchResult } from '../types';

/**
 * Search entries with relevance scoring
 */
export function searchEntriesWithRelevance(entries: GlossaryEntry[], query: string): SearchResult[] {
  if (!query.trim()) return [];
  
  const lowercaseQuery = query.toLowerCase().trim();
  const results: SearchResult[] = [];

  entries.forEach(entry => {
    let relevance = 0;
    let matchType: SearchResult['matchType'] = 'definition';

    // Exact term match (highest relevance)
    if (entry.term.toLowerCase() === lowercaseQuery) {
      relevance = 100;
      matchType = 'term';
    }
    // Term starts with query
    else if (entry.term.toLowerCase().startsWith(lowercaseQuery)) {
      relevance = 90;
      matchType = 'term';
    }
    // Term contains query
    else if (entry.term.toLowerCase().includes(lowercaseQuery)) {
      relevance = 80;
      matchType = 'term';
    }
    // Tag exact match
    else if (entry.tags?.some(tag => tag.toLowerCase() === lowercaseQuery)) {
      relevance = 70;
      matchType = 'tag';
    }
    // Tag contains query
    else if (entry.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery))) {
      relevance = 60;
      matchType = 'tag';
    }
    // Definition contains query
    else if (entry.definition.toLowerCase().includes(lowercaseQuery)) {
      relevance = 50;
      matchType = 'definition';
    }

    if (relevance > 0) {
      results.push({ entry, relevance, matchType });
    }
  });

  return results.sort((a, b) => b.relevance - a.relevance);
}

/**
 * Generate cross-links in content
 */
export function generateCrossLinks(content: string, entries: GlossaryEntry[]): string {
  let linkedContent = content;
  
  entries.forEach(entry => {
    const regex = new RegExp(`\\b${entry.term}\\b`, 'gi');
    linkedContent = linkedContent.replace(regex, 
      `<a href="#entry-${entry.id}" class="text-primary-600 hover:underline">${entry.term}</a>`
    );
  });
  
  return linkedContent;
}

/**
 * Filter entries by category
 */
export function filterByCategory(entries: GlossaryEntry[], categoryId: string): GlossaryEntry[] {
  return entries.filter(entry => entry.category === categoryId);
}

/**
 * Get random related entries
 */
export function getRandomRelatedEntries(
  entries: GlossaryEntry[], 
  currentEntry: GlossaryEntry, 
  count: number = 3
): GlossaryEntry[] {
  const sameCategory = entries.filter(
    entry => entry.category === currentEntry.category && entry.id !== currentEntry.id
  );
  
  const shuffled = sameCategory.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}