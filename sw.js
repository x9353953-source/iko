self.addEventListener('fetch', function(event) {
    // 空的 fetch 监听，为了满足 PWA 安装的最基本要求
});

self.addEventListener('install', function(event) {
    self.skipWaiting();
});
