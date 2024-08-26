<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TopBar from '@/components/TopBar.vue'

export default {
  components: {
    TopBar
  }
}
</script>

<template>
  <v-app>
    <TopBar />
    <v-main>
      <v-container>
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>
