// service-worker.js

const CACHE_NAME = 'my-cache';
const urlsToCache = [
  '/',
  '/app.html',
  '/+layout.svelte', // Cambia questo con il percorso del tuo file bundle Svelte
  '/app.css' // Cambia questo con il percorso del tuo file CSS globale
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
