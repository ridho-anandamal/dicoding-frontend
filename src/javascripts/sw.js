import CacheHelper from './utilities/cache-helper';
import 'regenerator-runtime';

const { assets } = global.serviceWorkerOption;

self.addEventListener('install', (event) => {
  console.log('Installing Service Worker...');

  // TODO: Caching
  event.waitUntil(CacheHelper.cachingAppShell([...assets, '/']));
});

self.addEventListener('activate', (event) => {
  console.log('Activating Service Worker');

  // TODO Delete Old Cache
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
