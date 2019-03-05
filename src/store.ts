import Vue from "vue"
import Vuex from "vuex"

import firebase from "firebase"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {
        login() {
            const provider: firebase.auth.GoogleAuthProvider = new firebase.auth.GoogleAuthProvider()

            firebase
                .auth()
                .signInWithPopup(provider)
                .then(result => {})
        }
    }
})
