<template>

    <v-list-tile avatar :to="{name: 'timeline'}">
        <v-list-tile-avatar>
            <img :src="item.avatar" />
        </v-list-tile-avatar>

        <v-list-tile-content>
            <v-list-tile-title v-html="item.title" class="primary--text text--darken-1 font-weight-bold"></v-list-tile-title>
            <v-list-tile-sub-title 
                v-html="item.subtitle"
            ></v-list-tile-sub-title>
        </v-list-tile-content>
    </v-list-tile>
</template>

<script>
export default {
    props: ["item"]
}
</script>

<style></style>
