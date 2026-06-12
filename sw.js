// cache basico para abrir offline (PWA)
const CACHE = "copa2026-v1";
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(["./", "./index.html"])));
});
self.addEventListener("fetch", e => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request, {ignoreSearch: true}))
  );
});
