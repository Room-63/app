<template>
    <v-flex align-center justify-center fill-height d-flex class="ripples-bg">
        <v-card class="mx-3" flat>
            <v-container>
                <v-layout text-xs-center wrap>
                    <v-flex xs12 mt-5>
                        <v-img
                            :src="require('../assets/Room 63 logo-04.png')"
                            class="my-1"
                            contain
                            height="200"
                        ></v-img>
                    </v-flex>

                    <v-flex mb-2>
                        <h1 class="subheading font-weight-bold mb-3">
                            Welcome to Room 63
                        </h1>
                    </v-flex>
                    <v-flex mb-2>
                        <ul class="caption mb-5">
                            <li>
                                Access to the organization is strictly  by invitation
                            </li>
                            <li>
                                Login is strictly via Google OAuth 
                            </li>
                            <li>
                                This implies all members must possess a Gmail account
                            </li>
                        </ul>
                    </v-flex>
                    <v-flex>
                        <v-btn :to="{name: 'projects'}" :loading="loading" class="white" light>Login</v-btn>
                    </v-flex>

                </v-layout>
            </v-container>
        </v-card>
    </v-flex>
</template>

<script>
export default {
    data: () => ({
        loading: false
    }),

    methods: {

        login() {
            this.loading = true;
            this.$store.dispatch('login');
        }
    }
}
</script>

<style scoped>
    .v-card {
        background-color: rgba(255, 255, 255, 0.25) !important;
        max-width: 400px;
    }

    * {
        font-family: Nunito;
        list-style-type: none;
    }

    .ripples-bg {
        background: url('/img/ripple bg.png');
        background-size: cover;
    }
</style>
