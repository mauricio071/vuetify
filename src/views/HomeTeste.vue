<template>
  <div>
    <Navbar />
    <h1>HomePage</h1>
    <v-btn class="pink">Click me</v-btn>
    <v-btn depressed class="pink">Click me</v-btn>
    <v-btn text class="pink">Click me</v-btn>
    <v-btn depressed class="pink">
      <v-icon left>email</v-icon>
      <span>email me</span>
    </v-btn>

    <v-btn depressed small class="pink">
      <v-icon left>email</v-icon>
      <span>email me</span>
    </v-btn>

    <v-btn depressed large class="pink">
      <span>email me</span>
      <v-icon right>email</v-icon>
    </v-btn>
  </div>
</template>

<script>
import Navbar from './Navbar'
export default {
  name: "HomeTeste",
  components: { Navbar}

}
</script>

<style scoped>

</style>
