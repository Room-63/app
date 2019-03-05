import Vue from "vue"
import Vuex from "vuex"

import firebase from "firebase"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        projects: [
            {
                avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
                title: "App for the Organization",
                subtitle:
                    "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
            },
            {
                avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
                title: "Bicoin Shit",
                subtitle:
                    "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
            },
            {
                avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
                title: "Binary Encryption PROJECT",
                subtitle:
                    "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
            },
            {
                avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
                title: "Birthday gift",
                subtitle:
                    "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?"
            },
            {
                avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
                title: "Recipe to try",
                subtitle:
                    "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
            }
        ]
    },
    mutations: {},
    actions: {
        login() {
            const provider: firebase.auth.GoogleAuthProvider = new firebase.auth.GoogleAuthProvider()

            firebase
                .auth()
                .signInWithPopup(provider)
                .then(result => {})
        },

        loadProjects() {}
    }
})
