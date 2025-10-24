// Belle 記帳本 Service Worker
// 版本號：每次更新時需要修改
const CACHE_VERSION = 'belle-v1.0.0';
const CACHE_NAME = `belle-accounting-${CACHE_VERSION}`;

// 需要緩存的文件列表
const urlsToCache = [
  './Belle_5_0薰衣紫_完整修正版.html',
  './manifest.json'
];

// 安裝 Service Worker
self.addEventListener('install', (event) => {
  console.log('🔧 Service Worker 安裝中...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('📦 開始緩存文件...');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('✅ 所有文件已緩存');
        return self.skipWaiting(); // 立即啟用新版本
      })
  );
});

// 啟用 Service Worker
self.addEventListener('activate', (event) => {
  console.log('🚀 Service Worker 啟用中...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            // 刪除舊版本的緩存
            if (cacheName !== CACHE_NAME) {
              console.log('🗑️ 刪除舊緩存:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('✅ Service Worker 已啟用');
        return self.clients.claim(); // 立即控制所有頁面
      })
  );
});

// 攔截網絡請求
self.addEventListener('fetch', (event) => {
  // 只處理 GET 請求
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // 如果緩存中有，直接返回
        if (response) {
          console.log('📦 從緩存返回:', event.request.url);
          return response;
        }

        // 如果緩存中沒有，從網絡獲取
        return fetch(event.request)
          .then((response) => {
            // 檢查是否是有效的響應
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // 克隆響應（因為響應只能使用一次）
            const responseToCache = response.clone();

            // 將新獲取的資源加入緩存
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          })
          .catch((error) => {
            console.error('❌ 網絡請求失敗:', error);
            // 可以返回一個離線頁面
            return new Response('離線模式：無法連接到網絡', {
              status: 503,
              statusText: 'Service Unavailable',
              headers: new Headers({
                'Content-Type': 'text/plain; charset=utf-8'
              })
            });
          });
      })
  );
});

// 監聽來自主頁面的消息
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

console.log('💜 Belle 記帳本 Service Worker 已載入');
