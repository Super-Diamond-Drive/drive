const CACHE_NAME = 'superdiamonddrive-offline-access';
const CACHE_DATA = [
  '/service-worker.js',
  '/index.html',
  '/manager.html',
  '/harddrive-manager.html',
  '/settings.html'
  '/DiscImport.html',
  '/DiscDownload.html',
  '/app.webmanifest',
  '/runners/SuperDiamondDisc.html',
  '/runners/SuperDiamondHarddrive.html',
  '/runners/audio.html',
  '/runners/image.html',
  '/runners/binaryHtml.html',
  '/runners/binaryJs.html',
  '/runners/binaryLua.html',
  '/runners/html.html',
  '/runners/js.html',
  '/runners/lua.html',
  '/runners/superDApp.html',
  '/runners/binarySuperDApp.html',
  '/runners/binaryTrustedSuperDScript.html',
  '/runners/bmp.html',
  '/runners/ico.html',
  '/runners/jpeg.html',
  '/runners/mp3.html',
  '/runners/mpeg.html',
  '/runners/pdf.html',
  '/runners/png.html',
  '/runners/rawSuperDApp.html',
  '/runners/superDScript.html',
  '/runners/superDiamondExtension.html',
  '/runners/theme.html',
  '/runners/wav.html',
  '/runners/trustedSuperDScript.html',
  '/runners/webm.html',
  '/core_files/file-list.html',
  '/disc-mng/download.html',
  '/disc-mng/import.html',
  '/software/secretifier.html',
  '/software/unsecretifier.html',
  '/load-service-worker.html'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CACHE_DATA);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
