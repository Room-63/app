<template>
    <v-subheader v-if="item.header" :key="item.header">{{
        item.header
    }}</v-subheader>

    <v-divider
        v-else-if="item.divider"
        :key="index"
        :inset="item.inset"
    ></v-divider>

    <v-list-tile v-else :key="item.title" avatar>
        <v-list-tile-avatar>
            <img :src="item.avatar" />
        </v-list-tile-avatar>

        <v-list-tile-content>
            <v-list-tile-title v-html="item.title"></v-list-tile-title>
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
