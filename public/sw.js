// Service Worker for basic offline functionality
const CACHE_NAME = 'astroglossary-v1';
const URLS_TO_CACHE = [
  '/astroglossary/',
  '/astroglossary/glossary/',
  '/astroglossary/charts/',
  '/astroglossary/favicon.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(URLS_TO_CACHE);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
  );
});