let staticCacheName = 'restaurant-catch-v1';
let cacheFiles = [
  './',
  'index.html',
  'restaurant.html',
  'css/styles.css',
  'data/restaurants.json',
  'js/dbhelper.js',
  'js/main.js',
  'js/restaurant_info.js',
  'img/1.jpg',
  'img/2.jpg',
  'img/3.jpg',
  'img/4.jpg',
  'img/5.jpg',
  'img/6.jpg',
  'img/7.jpg',
  'img/8.jpg',
  'img/9.jpg',
  'img/10.jpg'
];

//add all fetch to the cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches
      .open('staticCacheName')
      .then(cache => cache.addAll(cacheFiles))
      .catch(e => console.log('this failed :(', e))
  );
});

//fetch an item from the cache if it does not exist add it to the cache
self.addEventListener('fetch', event => {
  event.respondWith(
    caches
      .match(event.request)
      .then(response => {
        if(response) {
          return response;
        } else {
          return fetch(event.request)
            .then( response => {
              const cloneResponse = response.clone();
              caches
                .open('staticCacheName')
                .then(cache => cache.put(event.request, cloneResponse))
                return response;
            })
            .catch(error => console.log(error));
        }
      })
  );
});
