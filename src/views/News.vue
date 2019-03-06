<template>
<v-card flat>
        <v-card-title class="pa-2 primary">
        <v-btn icon  @click="$router.go(-1)">
          <v-icon>arrow_back</v-icon>
        </v-btn>
        <h3 class="title font-weight-light text-xs-center grow">Projects</h3>
        <v-avatar>
          <v-img
            src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-avatar>
      </v-card-title>

    <v-container grid-list-lg>
        <v-layout row wrap>
          <v-flex  v-for="i in 5" :key="i" xs12 sm6>
                <NewsItem/>
          </v-flex>
        </v-layout>
    </v-container>
      </v-card>
</template>

<script>

import NewsItem from '../components/NewsItem.vue'

export default {

    components: {
        NewsItem
    }

}
</script>

<style>

</style>
