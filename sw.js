const CACHE_NAME = 'aventura-saber-v1';
// Lista de todos os ficheiros do seu projeto
const urlsToCache = [
  './',
  './index.html',
  './img/apple.png',
  './img/banana.png',
  './img/circle.png',
  './img/grape.png',
  './img/orange.png',
  './img/rectangle.png',
  './img/square.png',
  './img/star.png',
  './img/strawberry.png',
  './img/triangle.png',
  './audio/chime.mp3',
  './audio/soft_pop.mp3'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Ficheiros guardados em cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Devolve o ficheiro em cache se existir, senão vai à internet/servidor
        return response || fetch(event.request);
      })
  );
});