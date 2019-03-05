import Vue from "vue"
import "./plugins/vuetify"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "./registerServiceWorker"

import firebase from "firebase"

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDjSnIXylcpa-3WXr7g5Q-YjHSbJ1aiOHw",
    authDomain: "room-63.firebaseapp.com",
    databaseURL: "https://room-63.firebaseio.com",
    projectId: "room-63",
    storageBucket: "room-63.appspot.com",
    messagingSenderId: "37014886737"
}
firebase.initializeApp(config)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app")
