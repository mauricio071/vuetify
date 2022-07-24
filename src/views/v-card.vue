<template>
  <div>
    <v-container class="my-5">
      <v-layout>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              image goes here
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn>
                <v-icon small left>mdi-message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
          >

            Dropdown
          </v-btn>
        </template>
        <v-list>
          <v-list-item
              v-for="(item, index) in items"
              :key="index"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-menu>
        <v-btn flat slot="activator" color="grey">
          <v-icon left>mdi-expand_more</v-icon>
        </v-btn>
      </v-menu>

    </v-container>
  </div>
</template>

<script>
export default {
  name: "v-card",
  data() {
    return {
      team: [
        { name: 'The Net jina', role: 'Web Developer' },
        { name: 'The Net jina', role: 'Web Developer' },
        { name: 'The Net jina', role: 'Web Developer' },
        { name: 'The Net jina', role: 'Web Developer' },
      ]
    }
  }
}
</script>

<style scoped>

</style>
