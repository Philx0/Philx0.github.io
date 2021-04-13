importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyAvnJjYWu4N11Fw8HL7v8JYPwWJjlI5JNA",
  authDomain: "droidautomate.firebaseapp.com",
  projectId: "droidautomate",
  storageBucket: "droidautomate.appspot.com",
  messagingSenderId: "111193523408",
  appId: "1:111193523408:web:bc5070ec3c82ee36170ad5",
  measurementId: "G-RBVHX221KR"
};

firebase.initializeApp(firebaseConfig);
const messaging=firebase.messaging();
messaging.subscribeToTopic("notif");


messaging.setBackgroundMessageHandler(function (payload) {
    console.log(payload);
    const notification=JSON.parse(payload);
    const notificationOption={
        body:notification.body,
        icon:notification.icon
    };
    return self.registration.showNotification(payload.notification.title,notificationOption);
});
