<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBSyEVTKd0hvfEQr2KsK17W7wtO4ifUfuY",
    authDomain: "electricitybill-7aa8e.firebaseapp.com",
    projectId: "electricitybill-7aa8e",
    storageBucket: "electricitybill-7aa8e.appspot.com",
    messagingSenderId: "399377935196",
    appId: "1:399377935196:web:def862e8d4a019990b6f99",
    measurementId: "G-6NF2X8RE97"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>