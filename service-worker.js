const CACHE_NAME = 'sumula-digital-v1';

self.addEventListener('install', event => {
    console.log('Service Worker: Instalando...');
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    console.log('Service Worker: Ativado.');
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', event => {
    event.respondWith(fetch(event.request));
});
