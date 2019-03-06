<template>
  <v-card color="primary" flat dark>
    <v-card-title>
      <v-icon left>home</v-icon>
      <span class="title font-weight-light">Lorem Ipsum</span>
    </v-card-title>

    <v-card-text>
        <p class="headline font-weight-bold">"Turns out semicolon-less style is easier and safer in TS."</p>
        <p class="subheading">Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.</p>
    </v-card-text>

    <v-card-actions>
      <v-list-tile class="grow">
        <v-list-tile-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>Evan You</v-list-tile-title>
        </v-list-tile-content>

        <v-layout align-center justify-end>
          <v-icon class="mr-1">mdi-heart</v-icon>
          <span class="subheading mr-2">256</span>
          <span class="mr-1">·</span>
          <v-icon class="mr-1">mdi-share-variant</v-icon>
          <span class="subheading">45</span>
        </v-layout>
      </v-list-tile>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {}
</script>

<style>
</style>
