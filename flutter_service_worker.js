'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "fb8d4678888024cd5f83d8522bb3a722",
"index.html": "1cff8ac8456f65448488b7e8c72f4889",
"/": "1cff8ac8456f65448488b7e8c72f4889",
"main.dart.js": "f3242c298e9bea43135668a75ad0de04",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "884ed368dd3439ac9fa178253ae152d9",
".git/config": "7605242f70b7038afdcc1f585460945c",
".git/objects/61/da063d10e3b8b91aa147d281a1b193566ef0cc": "23b432d709bef58b446c3a329a3dd3fa",
".git/objects/95/27dd7a5899629e8873a528313ee5bb4dabf9a3": "4644225ce2479f21e9578961a70ff57a",
".git/objects/0c/38efe5aed27c02d7ef7623b3f58a427814cc4d": "1f20ef1219e7fc16597dcb7a0e57b203",
".git/objects/66/0019048067d24ef49f07df43af185c4aef880e": "e22efcf3ba9ef66345b1087437caa10f",
".git/objects/50/435edda0e9ef7aca1b215381c5cecb82b179d9": "3113f8d7b1df76453ce878b3719e4aa4",
".git/objects/57/3cbfe235addc7738a5414a4efae236ff522e99": "7b595ad3bf146c2fa3ae078995e703d7",
".git/objects/03/53d02b3e20b0b53f8bb9a9b3f461d4dc960944": "1fc9ed5d004f215d18dfcf7466b1a8ba",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/9e/f6b68f22bea600ab515b26471f7935afbb095d": "2fd2f59e58076ede15fd2d30182da35c",
".git/objects/32/ec441839653d449052fe57da6751849b842e11": "286adfe090137b7555b3df374cfe0b53",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/0b/f65cec5b6f495bac149ebc2367f2f89cecb2be": "82dd776f3c0388e8fd78edbf525727f0",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/5f/ab81e3a631427c2155a1bdd4701fbe9eb1c719": "1a5e3cb4371e163ade1261016b6e4084",
".git/objects/05/12ec66d6d9641fc5a8aade77ae2d61bbf0bb38": "08a5ab4be2b468bd97666c4fc5a3c0ee",
".git/objects/05/86224f701656e1d5831692f103ab5ecb59b4ec": "161b3e312ae5ed139dd2e60f42b147ab",
".git/objects/9d/cb4681a8b4033baa3c4412631518dc0a86408f": "3255e0fc5c1e3214a50981136a993e80",
".git/objects/9d/472c10f89d253d44fdba9fabdd8ac2390bb955": "03742342ed5acc2ee8ed0dad4576fd0d",
".git/objects/9c/6caeadd124cd6e05c4e5a117b1c8b9e0db8a3c": "f25b5b2493f805bcb45330a16b85f8a1",
".git/objects/b5/a643db515bd6de5a0620007108b2006654caa9": "1034054993509cc670a47b3b7f419b5c",
".git/objects/b5/8c2b4522abf02751492557e86cbcb246dcf501": "07883f51ee91a4a91ae5f431312737c6",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/b4/816aa30260da62e238cebb392922b2a7248399": "d2b9f2ff53edccdb388da587d0e1632c",
".git/objects/a2/b67ac282788883425ac9d8b3b70517acbd8387": "45683fcf95d6b8e220f515e74f6aad1f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/88e07a042951b3c5a91fe254cef7db6f61f2c6": "570ad3de5115393e3c7c73814fcb8442",
".git/objects/ae/8f0886cd0a022e8ada27b11e3dd16e93ae4357": "c3f2a3a472f820668e2aba59491613f3",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/d8/e86db511678c6c824b73dcb57763eaedf37917": "205879249fba5001a1a67ef0e7eee308",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/c09f26f72549065652c2af836bd9a9fc8eba6f": "5dc59a0d6d1e393bda014f22a8f8c609",
".git/objects/c0/b642b575b7e4148c7f8f8f84b3f69a0383db89": "33bf752d91018cea0ab0322e615f1882",
".git/objects/fc/9bc6ed06fca13bd56d944cdce2522f9efcbdab": "c9956c7151a79c163b05fce081461317",
".git/objects/fb/181aec5fd3b2af0bf300a4c2be6cb2364d5c99": "a901430353bff252e396e4bf8dfc6e5d",
".git/objects/29/67f0705e9f3788675629165c857eb3a9bc202d": "d0d0417952fc7a859f30008d4af4b858",
".git/objects/42/7a3aa78bdcac460f18d356b9a68661c60cd5d9": "68d9ed3bda32bfda62d2c73c03f5702f",
".git/objects/17/3f3e2d8d57dca0f20c4eb068e62490336c3927": "a4d754e2c6db5d0a10aa1e0cc61d58cd",
".git/objects/8f/2d18f390386296d0b5c9d77d840e35beca2f27": "56808752e882fb71feee742359fd40c1",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/854fb5203d80eccdb2c4c012eb1e52a8ffacb7": "dcbaf70c6ea136da84e32edb56bab6c5",
".git/objects/5d/29c38c46c18917f027842520b25c187e0fb883": "89a5e7da6fc521be8d5cc494107fcde5",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/62/1e33602a9920e0d6638b4b2632e724f6e7345e": "ee3d5f22e6c14864378203148bd371cf",
".git/objects/3a/c1e024a0179ecde6058ddee2a1d34a2773f5a4": "6f6d8aaf5a6453fed85fb8f9b9bcc889",
".git/objects/98/ad79e9ebf62c1489c79e65603e200a20c4b8dd": "164fddfeb9cb7fb1412fa771d00bb0f7",
".git/objects/98/b3ac8cddab0cb18ac97baf86b06e8859e96145": "15a8cb3ab5cbab46ae53a1a73daf3ee3",
".git/objects/30/fb2bd54218ae2b13cbafef435acd396f2b8474": "961f2c29ffb3e50258ed0af7276558b7",
".git/objects/5e/91032fc4939b7edf151c9a3bbe71d61479e3eb": "de68d5cfd6dd5d8bde9aac95b954853e",
".git/objects/5b/5185e4a884dcb5c92be790f187c92b36947f1a": "176319a463ceec6e8c75cb2d1099377b",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/01/ceb172423f70c1f620d1faf756bf0104bb9219": "c0a69f30945d36b5e6372976519154c6",
".git/objects/0f/ef7583c5e7666c352dd4be90b7b318aeebe85c": "aa611f28bef7519e4ff3897949a865fc",
".git/objects/d3/0174aade7a1ad60a096e52f4ae164aaf351627": "8353374295414b5f032a96fee2d77b3e",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/3fb3b188698a2c0495982776df3dc63eb554e0": "c6242d5149f466fe4ac6bba8bd1b1834",
".git/objects/a7/45206cdd7435b905d99296671dc71eebcbe6d5": "3151fb7b2f910c70fb85c3c1cadd45a1",
".git/objects/af/545ca8461115eaec6883831bb0af636394e934": "885b4fb2dc3c9fcc0d55933be188dccb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/563c1cbea0befd16ad7d8e3f7ce348786549f1": "83ae4f182f9bd5523d1ef26ef1415cdc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ea/73f04eb09dd1f481f70962de1a84c17270a0c8": "ea1308e81b39ac2ed9544fdab33b31e1",
".git/objects/cc/cb9ec448ff8208b74db811de2ec8d27b4031a3": "0b3c565330736bd3caeb933b50f65839",
".git/objects/fa/6d51af61fbf463c86f687db995d9196f794bc0": "18d96279f0bad7c963d31dea14f86324",
".git/objects/e9/3cd9cb1aa3b22e48d95afe5be680e20cd1d820": "f53d7c3ee5fc4c2afcd41b062efaf4de",
".git/objects/e9/83ff8ff402da9704e11be09d2e8ff228b082c1": "4fbe97622890dd89f30439c3b17cf5dd",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/cb/7d2cbd0fe7b623358d94bcc1920c70b15db879": "c486d9298f65351febad76cd4fd9a9f5",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2d/700d5987f14af879919a5b3640c559815e8752": "8868324a3ab6a4bf7833fac15d29e654",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/84/348fd206a476a25da7cc6eb1b26a29657c13a9": "6752f40c105e259f5e37205d88941433",
".git/objects/23/83a5b12d313ccd5168224d8c468f6abd17609b": "0cfa20cdf41b091ecae6be8a2fce21b6",
".git/objects/4f/b33cd6512db6f3771365bed3f745ffdb47dae5": "58537a41a9d7a82c03ca0919ff858b9e",
".git/objects/15/2c68086bb70a59e96e94e1ced100604f2fc8f1": "8695f948a9335ab6c11c0a6949a72482",
".git/objects/12/0e60a64ea363aff4a37150fb166eebb27e8444": "b6858180dbf6476d9bec53038ad66168",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/76/de09c3542259f516008ce525e8702588b5452b": "60473cacc556e439b12d7194ff86b7c0",
".git/objects/1c/911436e151a3b39aa74dcdafb100864e27aee1": "df1a8bcd0b0eaaff92e926f52e5c5b81",
".git/objects/40/cbcda6b321159ac50a4239dae4bcc88ee73e08": "1ea28807f09d6c5db422cbf5750ee390",
".git/objects/8b/9515161ff5f4cea13e1799444b4bc471d293ee": "8ac4b8388e191d038116fff1c63aca22",
".git/objects/7a/19e8603e87d361acc57c42c29716bacdcf5ee2": "91a855b4ccc8e2f32bb7be99e946021a",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "85b163a3e544778cd916463fd20d8a51",
".git/logs/refs/heads/main": "85b163a3e544778cd916463fd20d8a51",
".git/logs/refs/remotes/origin/main": "8ec541621a6768dee469f9105630c660",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "373df3ce4809966f256df6f0067e3cc9",
".git/refs/remotes/origin/main": "373df3ce4809966f256df6f0067e3cc9",
".git/index": "69d733a3ad63ba49151fe308760f104a",
".git/COMMIT_EDITMSG": "bff8e610f41b0496349c6781f14ff99f",
"assets/AssetManifest.json": "0f187f404b8c63e20334a070d1f2e881",
"assets/NOTICES": "e91e355a74dc98a7a3634f50a9b930af",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "3eda17dfca3150157f5c7e68154a0dfa",
"assets/fonts/MaterialIcons-Regular.otf": "74f77c8ce6da838d047e6becf9a0bd07",
"assets/assets/images/mypic.png": "b64aa5a6cf9a5e9043108c6d7d979811",
"assets/assets/images/ubi.png": "77dcba0857d1599474eba7c0ebb20183",
"assets/assets/images/git.png": "7b08b14f30c2110a685bafcd33e8a480",
"assets/assets/images/brush-stroke.png": "41854d93cc2b183ac9bf55e4b5097846",
"assets/assets/images/in.png": "a65bf53ef6a1d1555120edfc1810f551",
"assets/assets/images/work2.jpg": "8ac2eef16dd7a05a53702e965891c948",
"assets/assets/images/face.png": "3e569c0b44e18cf4ac36c2f52ca2c4fc",
"assets/assets/images/work1.jpg": "58bbc11e54a3643754df21fd0d1e59a8",
"assets/assets/images/ubiscreen.png": "e8bff9e7d80df7abed2cc5094195913b",
"assets/assets/images/pro2.png": "c25801745513b563c939c527a2d2d46f",
"assets/assets/images/pro1.png": "a618dc4969d82a6d2ece39a7ee5d11f1",
"assets/assets/images/insta.png": "bd3f44e94e19e2cd2fed522e65f67657",
"assets/assets/images/share.png": "7d05af750cd03cdda7f247d7dc8b532e",
"assets/assets/images/analytics.png": "610a95aedc2c0c32d1316562dc8ec248",
"assets/assets/images/twit.png": "3f2b027c50dd30dd9abeeaeb1b68b1c3",
"assets/assets/images/coding.png": "af1b456dad3dd6f43f14994963b57316",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
