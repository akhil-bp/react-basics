importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-messaging.js");
const firebaseConfig = {
    apiKey: "AIzaSyCkBVLU9wFutGlGPyQKP1CQFAVdnxPN85A",
    authDomain: "akhil-bp.firebaseapp.com",
    databaseURL: "https://akhil-bp.firebaseio.com",
    projectId: "akhil-bp",
    storageBucket: "akhil-bp.appspot.com",
    messagingSenderId: "255527625404",
    appId: "1:255527625404:web:9ed2a7e2c8e82a7875a6b9",
    measurementId: "G-JP72YJ1YWG"
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
     const promiseChain = clients
          .matchAll({
               type: "window",
               includeUncontrolled: true,
          })
          .then((windowClients) => {
               for (let i = 0; i < windowClients.length; i++) {
                    const windowClient = windowClients[i];
                    windowClient.postMessage(payload);
               }
          })
          .then(() => {
               return registration.showNotification("my notification title");
          });
     return promiseChain;
});
self.addEventListener("notificationclick", function(event) {
     console.log(event);
});