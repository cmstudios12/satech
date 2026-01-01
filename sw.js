const cacheName = "satech-cache-v2"; // change v1 → v2
const assets = [
  "/",                     // root index
  "/index.html",           // homepage
  "/style.css",            // your CSS
  "/script.js",            // JS file (your main scripts)
  "/logo.png",             // your logo
  "/toplap.png",           // hero image
  "/Dell_Latitude_5400.png",
  "/HP_ProBook_450_G6.png",
  "/Lenovo-T480.png",
  "/Dell_Inspiron_15.png",
  "/HP_EliteBook_840_G5.png",
  "/Lenovo_Yoga_370.png",
  "/Dell_XPS_13.png",
  "/HP_Pavilion_14.png"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(assets))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});
