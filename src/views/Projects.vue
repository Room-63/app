<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
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

        <v-layout row wrap>
          <v-flex>
            <v-list two-line>
              <template v-for="(group, index) in projects">
                <v-subheader :key="index"> {{ index }}</v-subheader>
                <template v-for="(item, index) in group">
                  <ProjectItem :item="item" :key="index"/>
                  <v-divider :key="index" ></v-divider>
                </template>
              </template>
            </v-list>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import ProjectItem from "../components/ProjectItem.vue"

export default {
    components: {
        ProjectItem
    },

    data: () => ({
        
    }),

    mounted() {
        this.$store.dispatch("loadProjects")
        console.log(this.projects)
    },

    computed: {
        projects() {
            if (this.$store.state.projects) {
                return this.$store.state.projects
                    .sort((a, b) => a.title.charAt(0) > b.title.charAt(0))
                    .reduce((tot, cur) => {
                        let c = cur.title.charAt(0)
                        tot[c] = tot[c] || []
                        tot[c].push(cur)
                        return tot
                    }, {})
            }
            return []
        }
    }
}
</script>

<style></style>
