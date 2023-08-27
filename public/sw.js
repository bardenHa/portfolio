const GOOGLE_FONTS_REGEX = /fonts.(googleapis|gstatic).com\/css/;

// TODO: add a entry to rollup.config.js to generate sw.js, then we can use ts
// TODO: make sure there are no conflicts with browser cache

const SW_VERSION = '0.1.0'; // TODO: use package.json version
const CACHE_NAME = `cache-${SW_VERSION}`;
const CACHE_KEEP_LIST = [];

self.addEventListener('fetch', event => {
  const { url } = event.request;

  if (GOOGLE_FONTS_REGEX.test(url)) {
    event.respondWith(
      caches.match(event.request).then(response => {
        if (response) {
          return response;
        }

        return fetch(event.request).then(response => {
          event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.put(event.request, response)));

          return response.clone();
        });
      })
    );
  }
});

const deleteCache = async key => {
  await caches.delete(key);
};

const deleteOldCaches = async () => {
  const keyList = await caches.keys();
  const cachesToDelete = keyList.filter(key => !CACHE_KEEP_LIST.includes(key));
  if (cachesToDelete.length > 0) {
    await Promise.all(cachesToDelete.map(deleteCache));
    console.log(`Deleted old caches: ${cachesToDelete.join(', ')}`);
  }
};

self.addEventListener('activate', event => {
  event.waitUntil(deleteOldCaches());
  console.log(`Service worker v${SW_VERSION} ready ⚙️`);
});
