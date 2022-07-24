<template>
<!--  <nav>-->
<!--    <v-toolbar flat app>-->
<!--      <v-toolbar-title>-->
<!--        <span>Teste</span>-->
<!--      </v-toolbar-title>-->
<!--      <v-spacer></v-spacer>-->
<!--      <v-btn flat>-->
<!--        <span>Sign out</span>-->
<!--        <v-icon right>exit_to_app</v-icon>-->
<!--      </v-btn>-->
<!--    </v-toolbar>-->
<!--  </nav>-->
  <div>
    <v-app-bar>
      <v-toolbar-title v-text="'Logo'"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field placeholder="Pesquisar" filled small solo-inverted hide-details flat dense prepend-inner-icon="mdi-magnify" ></v-text-field>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>

</style>
