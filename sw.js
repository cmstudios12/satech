const cacheName = "satech-cache-v1";
const assets = [
  "/",                
  "/index.html",      
  "/logo.png",       
  "/toplap.png",      
  "/Dell_Latitude_5400.png",
  "/HP_ProBook_450_G6.png",
  "/Lenovo-T480.png",
  "/Dell_Inspiron_15.png",
  "/HP_EliteBook_840_G5.png",
  "/Lenovo_Yoga_370.png",
  "/Dell_XPS_13.png",
  "/HP_Pavilion_14.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(assets))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
