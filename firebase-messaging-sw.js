importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyBh8cPnt3MovP0vf1Qi3zU0LVcXYC3RNKA",
    authDomain: "talabat-78707.firebaseapp.com",
    databaseURL: "https://talabat-78707-default-rtdb.firebaseio.com/",
    projectId: "talabat-78707",
    storageBucket: "talabat-78707.firebasestorage.app",
    messagingSenderId: "786538469018",
    appId: "1:786538469018:web:bbce837d6453b0aa91b123"
});

const messaging = firebase.messaging();

// This handles incoming notifications when the app is completely closed or in the background
messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon || '/1.png'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
