import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAx-V2plQJs_mF8p2Tj9PBjW3exoj6jrb0",
  authDomain: "zuvora-3d7a3.firebaseapp.com",
  databaseURL: "https://zuvora-3d7a3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "zuvora-3d7a3",
  storageBucket: "zuvora-3d7a3.firebasestorage.app",
  messagingSenderId: "1011031030324",
  appId: "1:1011031030324:web:98ecce6c969735e7386861"
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

const auth = getAuth(app);

export { database, auth };