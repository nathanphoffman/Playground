<script setup lang="ts">
import { ref } from "vue";
const count = ref(0);
const name = ref("");
</script>

<template>
  <v-app>
    <v-app-bar title="Hello, Vuetify" color="primary" />
    <v-main>
      <v-container>
        <v-card class="pa-4" max-width="400">
          <v-text-field v-model="name" label="Your name" />
          <v-btn color="primary" @click="count++">Clicked {{ count }} times</v-btn>
          <p class="mt-4" v-if="name">Hello, {{ name }}</p>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>
