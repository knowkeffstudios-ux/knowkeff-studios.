const CACHE='knowkeff-shell-v3';
const SHELL=['./','./index.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png','./icons/icon-180.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('knowkeff-shell-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',event=>{
 const req=event.request;
 if(req.method!=='GET'||new URL(req.url).origin!==self.location.origin)return;
 // Do not cache streamed videos, range requests or API responses.
 if(req.headers.has('range')||/\.(mp4|m3u8|ts|webm|mov)(\?|$)/i.test(new URL(req.url).pathname)||new URL(req.url).pathname.startsWith('/api/'))return;
 if(req.mode==='navigate'){
   event.respondWith(fetch(req).catch(()=>caches.match('./index.html')));return;
 }
 event.respondWith(caches.match(req).then(hit=>hit||fetch(req)));
});
