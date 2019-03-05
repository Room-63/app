<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card flat>
        <v-toolbar color="primary" dark flat>
          <v-btn icon>
            <v-icon>arrow_left</v-icon>
          </v-btn>

          <v-toolbar-title>Projects</v-toolbar-title>
        </v-toolbar>

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
        items: [
            { header: "A" },
            {
                avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
                title: "App for the Organization",
                subtitle:
                    "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
            },
            { header: "B" },
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
            { header: "R" },
            {
                avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
                title: "Recipe to try",
                subtitle:
                    "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
            }
        ]
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
