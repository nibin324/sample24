self.addEventListener("install",e=>{
    e.waitUntil(
        caches.open("static").then(Cache=>{
            return Cache.addAll(["./","./login.html","./signup.html","./style.css","./images/logo64.png","./images/logo512.png"])
        })
    )
})

self.addEventListener("fetch",e=>{
    e.respondWith(
        caches.match(e.request).then(response=>{
            return response || fetch(e.request);
        })
    )
})