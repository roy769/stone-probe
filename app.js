

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCpWqWDZb5w_sjchXaJnRQE83yfORJgTlU",
    authDomain: "stone-probe.firebaseapp.com",
    databaseURL: "https://stone-probe.firebaseio.com",
    projectId: "stone-probe",
    storageBucket: "stone-probe.appspot.com",
    messagingSenderId: "677748183079"
  };
  firebase.initializeApp(config);

  var db = firebase.firestore();
