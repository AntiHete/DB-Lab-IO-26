/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "0fb51a8c70203da0e74fe3914e6aca33"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.874f5e71.css",
    "revision": "65297f51f5cab3bf1a2f70191982a0c8"
  },
  {
    "url": "assets/img/create_board_result.7ab1209b.png",
    "revision": "7ab1209b7aa89025655a8625643333d8"
  },
  {
    "url": "assets/img/create_board.1ca30d47.png",
    "revision": "1ca30d476d798423091fdf0e35994f50"
  },
  {
    "url": "assets/img/delete_board_result.74052ae6.png",
    "revision": "74052ae6caf840bc437f3059152ed4ce"
  },
  {
    "url": "assets/img/delete_board.0f4536da.png",
    "revision": "0f4536da601a5aa8058d1a3dbfebf699"
  },
  {
    "url": "assets/img/get_boards.5974589f.png",
    "revision": "5974589fab3b13376d167eb8a38c069c"
  },
  {
    "url": "assets/img/MySQL.8db3eeeb.png",
    "revision": "8db3eeebdfb320985ce9aec2fee77203"
  },
  {
    "url": "assets/img/read_board.9dee2b20.png",
    "revision": "9dee2b204a375f1d0a1ec444e4c87753"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/update_board_result.52722b99.png",
    "revision": "52722b99873948ed762e6e48d9615e72"
  },
  {
    "url": "assets/img/update_board.cd2221b1.png",
    "revision": "cd2221b1c76b713fd0dee53717ce4e2a"
  },
  {
    "url": "assets/js/10.a4b32e52.js",
    "revision": "3e4c20e5dfea9a6c2bef1aa76991394e"
  },
  {
    "url": "assets/js/11.13ec7079.js",
    "revision": "19db36806306dd7c120e1e8206e1d65f"
  },
  {
    "url": "assets/js/12.402ac58a.js",
    "revision": "020c29f3eda3129406cbe1db12ee2ee9"
  },
  {
    "url": "assets/js/13.3afb082c.js",
    "revision": "0a34349d9286d00b4a43ae67a18b473e"
  },
  {
    "url": "assets/js/14.4c864c5e.js",
    "revision": "247ab6962c40c076a8240f8512296f87"
  },
  {
    "url": "assets/js/15.2fd3d02a.js",
    "revision": "f139e857ec666f4703acbce4d11121cc"
  },
  {
    "url": "assets/js/16.c616848f.js",
    "revision": "6c3e2c360b9e956653daaeb58af41999"
  },
  {
    "url": "assets/js/17.440095fe.js",
    "revision": "f2a0f8f8c70297a74c2a3102fe2d9bf7"
  },
  {
    "url": "assets/js/18.e93cda26.js",
    "revision": "1fcdbc15c35def4bf1bbe57b6184765f"
  },
  {
    "url": "assets/js/19.7b7fa1bf.js",
    "revision": "96965bd168b529503e323a45ffd27ff3"
  },
  {
    "url": "assets/js/2.31d7ff22.js",
    "revision": "e987c7d6ffc0022038c9ec0723492141"
  },
  {
    "url": "assets/js/20.b41fdaa3.js",
    "revision": "a5e46ced8cb3c954fe4e2e9e0744fa30"
  },
  {
    "url": "assets/js/21.5921703b.js",
    "revision": "053dc730e679764f19ae17c5a2d66fed"
  },
  {
    "url": "assets/js/22.e858f4ab.js",
    "revision": "1d96a8810426445c6ac862e08641eebb"
  },
  {
    "url": "assets/js/23.3133b2a1.js",
    "revision": "44ef4477cc4dab1cde3f18c705a4da40"
  },
  {
    "url": "assets/js/24.a080aacb.js",
    "revision": "ac9f3c67c04a6299f924d6146398d824"
  },
  {
    "url": "assets/js/26.692a3120.js",
    "revision": "58fbc6f88de211b8e41bad42954b221d"
  },
  {
    "url": "assets/js/3.5bc66be8.js",
    "revision": "33087ea96a07a92347ad685d3d254016"
  },
  {
    "url": "assets/js/4.ae6a6bfd.js",
    "revision": "0ef835bf435d98a6edf1c35e3bcacdf3"
  },
  {
    "url": "assets/js/5.e8bb3eca.js",
    "revision": "4e08d56458e399c6d82c8d0bbb19a206"
  },
  {
    "url": "assets/js/6.07205bb4.js",
    "revision": "395e6d0aec3f8bc407e222f54bf4185e"
  },
  {
    "url": "assets/js/7.213601b9.js",
    "revision": "730e00f6155cf350989f7a04e7acd4f6"
  },
  {
    "url": "assets/js/8.1764375e.js",
    "revision": "0be00e955ad1ab792169e4e915ac4a84"
  },
  {
    "url": "assets/js/9.1f621b48.js",
    "revision": "bede82ea706975de0bf549a2411a9597"
  },
  {
    "url": "assets/js/app.ab106894.js",
    "revision": "bdcdb354045e8156570de1e6725e4e53"
  },
  {
    "url": "conclusion/index.html",
    "revision": "acce4b76cfe4f572566598498e611ad2"
  },
  {
    "url": "design/index.html",
    "revision": "0c73597acb1012547072e27b821d0bd9"
  },
  {
    "url": "index.html",
    "revision": "f2a3613922671be60e446ffd91a2c200"
  },
  {
    "url": "intro/index.html",
    "revision": "04ed54e0926524b33f6203d2a531dd83"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "90b219e334bfc1d6c4ddf86de428f8e5"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "dae16315e22b691a37c5d10d745de735"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "7ee16e6447c984c4d99f88ad331b02f2"
  },
  {
    "url": "software/index.html",
    "revision": "05c7d1d1538d0cc00c178d153ba2c806"
  },
  {
    "url": "test/index.html",
    "revision": "2c8fedbdae5a724ae4c156b82fa13172"
  },
  {
    "url": "use cases/index.html",
    "revision": "9449ad4cc39fc4830479e70455fb20d5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
